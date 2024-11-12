<div class="post-item">
    <div class="row">
        <?php $post_image_url = get_the_post_thumbnail_url($post->ID, 'large'); ?>
        <?php if ($post_image_url): ?>
            <div class="col-sm-6 post-image">
                <figure>
                    <img src="<?php echo esc_url($post_image_url); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy">
                </figure>
            </div>
        <?php endif; ?>
        <div class="col-sm-6 post-content">
            <div class="post-desc">
                <h3 class="post-title"><?php echo esc_html(get_the_title()); ?></h3>
                <p class="post-desc-work"><?php echo esc_html(get_field('my_role')); ?></p>
                <div class="post-desc-text">
                    <?php echo wp_kses_post(get_field('project_description')); ?>
                </div>
                <div class="post-desc-skills">
                    <?php echo wp_kses_post(get_field('skills_and_deliverables')); ?>
                </div>
                <div class="btn btn-dark post-link">
                    <a href="<?php echo esc_html(get_field('web_link')); ?>" target="_blank">Visit website</a>
                </div>
            </div>
        </div>
    </div>
</div>
