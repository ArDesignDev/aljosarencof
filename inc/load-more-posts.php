<?php 
// Load more posts with ajax (also load-more.js has to be added)

function load_more_scripts() {
    wp_enqueue_script('load-more', get_template_directory_uri() . '/js/admin/load-more.js', array('jquery'), null, true);
    wp_localize_script('load-more', 'ajax_url', admin_url('admin-ajax.php'));
}
add_action('wp_enqueue_scripts', 'load_more_scripts');

function load_more_posts() {
    $paged = isset($_POST['page']) ? intval($_POST['page']) : 1;

    $args = array(
        'post_type' => 'post', // Change 'post' to your custom post type if needed
        'paged' => $paged,
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            get_template_part('template-parts/sections/project', get_post_type());
        }
        wp_reset_postdata();

        // Check if there are more posts to load
        if ($paged >= $query->max_num_pages) {
            echo '<script>jQuery("#load-more").remove();</script>'; // Remove button if no more posts
        }
    } else {
        echo ''; // No more posts
    }

    wp_die();
}
add_action('wp_ajax_load_more_posts', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');
