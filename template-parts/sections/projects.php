<section class="categories-section" id="work">
    <div class="container">
        
        <!-- Category Navigation Header -->
        <div class="categories-section-header">
            <h2 class="categories-section-title text-split"><?php echo the_field('work_title'); ?></h2>
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

        <!-- Load more button -->
        <?php if ($query->max_num_pages > 1): ?>
        <button class="btn-load-more" id="load-more" data-page="1">Load More</button> 
        <?php endif; ?>
    </div>
</section>
