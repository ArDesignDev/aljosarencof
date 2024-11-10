<section class="categories-section" id="work">
    <div class="container">
        
        <!-- Category Navigation Header -->
        <div class="categories-section-header">
            <h2 class="categories-section-title"><?php echo the_field('work_title'); ?></h2>
        </div>

        <div class="post-list">
        <?php
        $posts = get_posts(array(
            'numberposts' => 10,
            'post_type' => 'post',
            'post_status' => 'publish'
        ));

        foreach ($posts as $post) :
            // Setup post data
            setup_postdata($post);

            // Get post details
            $post_slug = esc_attr(str_replace(' ', '-', strtolower($post->post_name)));
            $post_image_url = get_the_post_thumbnail_url($post->ID, 'large'); // Featured image
        ?>
            <div class="post-item" id="<?php echo $post_slug; ?>">
                <div class="row">

                    <!-- Post Image -->
                    <?php if ($post_image_url): ?>
                        <div class="col-sm-6 post-image">
                            <figure>
                                <img src="<?php echo esc_url($post_image_url); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy">
                            </figure>
                        </div>
                    <?php endif; ?>

                    <!-- Post Content -->
                    <div class="col-sm-6 post-content">
                       
                        <div class="post-desc">
                            <h3 class="post-title"><?php echo esc_html(get_the_title()); ?></h3>
                            <p><strong>My role: </strong><?php echo esc_html(get_field('my_role')); ?></p>
                            <div class="post-desc-text"><p><strong>Project description: </strong></p> <?php echo wp_kses_post(get_field('project_description')); ?></div>
                            <div class="post-desc-skills">
                                <?php echo wp_kses_post(get_field('skills_and_deliverables')); ?></p>
                            </div>
                            <div class="btn btn-dark post-link">
                                <a href="<?php echo esc_html(get_field('web_link')); ?>" target="_blank">Visit website</a>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        <?php endforeach; ?>
        <?php wp_reset_postdata(); ?>
        </div>


    </div>
</section>
