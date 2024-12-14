<?php
// AJAX Handler for Loading More Posts
function filter_posts_by_category() {
    $posts_per_page = 4; // Number of posts per page
    $page = isset($_POST['page']) ? intval($_POST['page']) : 1; // Default to the first page
  
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => $posts_per_page,
        'paged' => $page
    );
  
    $query = new WP_Query($args);
  
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            get_template_part('template-parts/sections/projects-item'); // Loads the template part for displaying posts
        }
    } else {
        echo ''; // Return an empty response when no more posts
    }
  
    wp_die(); // Proper way to terminate immediately and return a proper response
  }
  
  add_action('wp_ajax_filter_posts_by_category', 'filter_posts_by_category');
  add_action('wp_ajax_nopriv_filter_posts_by_category', 'filter_posts_by_category');
