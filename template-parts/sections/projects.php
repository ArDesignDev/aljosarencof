<?php 
// acf
$current_lang = pll_current_language();

if ($current_lang === 'sl') {
    $load_more_text = get_field('load_more_text_si', 'option');
    $button_text_visit = get_field('visit_website_text_si', 'option');
} else {
    $load_more_text = get_field('load_more_text', 'option');
    $button_text_visit = get_field('visit_website_text', 'option');
}

?>

<section class="categories-section section-active" id="work">
    <div class="container">
        
        <!-- Category Navigation Header -->
        <div class="categories-section-header">
            <h2 class="categories-section-title text-split"><?php echo the_field('work_title'); ?></h2>
            <p class="categories-section-subtitle fade-in"><?php echo the_field('work_subtitle'); ?></p>
        </div>
        <!-- Project List -->
        <div id="posts-container" class="post-list">
                <?php

                $args = array(
                    'post_type' => 'post',
                    'posts_per_page' => 4 // Adjust the number as needed
                );

                $query = new WP_Query($args);

                if ($query->have_posts()) : 
                    while ($query->have_posts()) : $query->the_post();
                        get_template_part('template-parts/sections/projects-item');
                    endwhile;
                    wp_reset_postdata();
                else :
                    echo '';
                endif;

                ?>
        </div>

        <?php if ($query->max_num_pages > 1): ?>
        <button class="btn-load-more" id="load-more" data-page="1"><?php echo $load_more_text; ?></button> 
        <?php endif; ?>
    </div>
</section>

<?php
// button text
echo '<div style="display: none;" class="btn-visit-website">' . $button_text_visit . '</div>';
?>
