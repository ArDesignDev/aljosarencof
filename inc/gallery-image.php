<?php
/**
 * Add custom image fields to category taxonomy and expose them via REST API.
 */
function add_category_image_fields($term) {
    $image_id = is_object($term) ? get_term_meta($term->term_id, 'category_image', true) : '';
    $image_id_small = is_object($term) ? get_term_meta($term->term_id, 'category_image_small', true) : '';
    ?>

    <!-- Main Image Field -->
    <tr class="form-field term-group-wrap">
    <th scope="row"><label for="category-image"><?php _e('Category Image', 'text_domain'); ?></label></th>
    <td>
        <input type="button" class="button button-secondary" id="category_image_upload" value="<?php _e('Add Image', 'text_domain'); ?>" />
        <input type="hidden" id="category_image" name="category_image" value="<?php echo esc_attr($image_id); ?>" />
        <div id="category_image_preview">
            <?php if ($image_id): ?>
                <img src="<?php echo wp_get_attachment_image_url($image_id, 'thumbnail'); ?>" style="max-width: 150px; max-height: 150px;" />
            <?php endif; ?>
        </div>
    </td>
    </tr>

    <!-- Small Image Field -->
    <tr class="form-field term-group-wrap">
        <th scope="row"><label for="category-image-small"><?php _e('Category Small Image', 'text_domain'); ?></label></th>
        <td>
            <input type="button" class="button button-secondary" id="category_image_small_upload" value="<?php _e('Add Small Image', 'text_domain'); ?>" />
            <input type="hidden" id="category_image_small" name="category_image_small" value="<?php echo esc_attr($image_id_small); ?>" />
            <div id="category_image_small_preview">
                <?php if ($image_id_small): ?>
                    <img src="<?php echo wp_get_attachment_image_url($image_id_small, 'thumbnail'); ?>" style="max-width: 150px; max-height: 150px;" />
                <?php endif; ?>
            </div>
        </td>
    </tr>

    <?php
}
add_action('category_edit_form_fields', 'add_category_image_fields', 10, 2);
add_action('category_add_form_fields', 'add_category_image_fields', 10, 2);

function save_category_image_fields($term_id) {
    if (isset($_POST['category_image']) && '' !== $_POST['category_image']) {
        update_term_meta($term_id, 'category_image', intval($_POST['category_image']));
    } else {
        delete_term_meta($term_id, 'category_image');
    }

    if (isset($_POST['category_image_small']) && '' !== $_POST['category_image_small']) {
        update_term_meta($term_id, 'category_image_small', intval($_POST['category_image_small']));
    } else {
        delete_term_meta($term_id, 'category_image_small');
    }
}
add_action('created_category', 'save_category_image_fields', 10, 2);
add_action('edited_category', 'save_category_image_fields', 10, 2);

function category_enqueue_media() {
    if (isset($_GET['taxonomy']) && $_GET['taxonomy'] == 'category') {
        wp_enqueue_media();
        wp_enqueue_script('category-media-script', get_template_directory_uri() . '/js/category-media.js', array('jquery'), null, true);
    }
}
add_action('admin_enqueue_scripts', 'category_enqueue_media');

// Add custom fields support for category_image and category_image_small in REST API
add_action('rest_api_init', function () {
    register_rest_field('category', 'category_image', [
        'get_callback' => function ($term) {
            $image_id = get_term_meta($term['id'], 'category_image', true);
            return $image_id ? wp_get_attachment_url($image_id) : null;
        },
        'schema' => null,
    ]);
    
    register_rest_field('category', 'category_image_small', [
        'get_callback' => function ($term) {
            $image_id_small = get_term_meta($term['id'], 'category_image_small', true);
            return $image_id_small ? wp_get_attachment_url($image_id_small) : null;
        },
        'schema' => null,
    ]);
});
