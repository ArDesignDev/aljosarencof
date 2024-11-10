<?php
// Get the current category ID
$current_category = get_queried_object();
$current_category_id = $current_category->term_id;

// Get all categories in the order you want (you could use custom sorting here)
$categories = get_categories(array(
    'orderby' => 'name', // Order alphabetically, or change to your preferred order
    'order' => 'ASC',
    'hide_empty' => true,
));

// Find the current category in the list
$category_ids = wp_list_pluck($categories, 'term_id');
$current_index = array_search($current_category_id, $category_ids);

// Calculate previous and next categories
$prev_index = ($current_index - 1 + count($categories)) % count($categories);
$next_index = ($current_index + 1) % count($categories);

// Get previous and next categories
$prev_category = $categories[$prev_index];
$next_category = $categories[$next_index];
?>

<!-- Display the navigation links at the bottom of the page -->
<div class="category-navigation">
    <div class="nav-left">
        <a href="<?php echo esc_url(get_category_link($prev_category->term_id)); ?>">
            ← <?php echo esc_html($prev_category->name); ?>
        </a>
    </div>
    <div class="nav-right">
        <a href="<?php echo esc_url(get_category_link($next_category->term_id)); ?>">
            <?php echo esc_html($next_category->name); ?> →
        </a>
    </div>
</div>
