<div class="post-item fade-in">
    <div class="row row-center">
        <?php $post_image_url = get_the_post_thumbnail_url($post->ID, 'large'); ?>
        <?php if ($post_image_url): ?>
            <div class="col-sm-7 post-image">
                <figure>
                    <img src="<?php echo esc_url($post_image_url); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy">
                </figure>
            </div>
        <?php endif; ?>
        <div class="col-sm-5 post-content">
            <div class="post-desc">
                <h3 class="post-title"><?php echo esc_html(get_the_title()); ?></h3>
                <p class="post-desc-work"><?php echo esc_html(get_field('my_role')); ?></p>
                <div class="post-desc-text">
                    <?php echo wp_kses_post(get_field('project_description')); ?>
                </div>
                <!--
                <div class="post-desc-skills">
                    <?php echo wp_kses_post(get_field('skills_and_deliverables')); ?>
                </div>-->
                <a href="<?php echo esc_html(get_field('web_link')); ?>" target="_blank" class="btn-link">
                    Visit website
                    <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h6v6h-1V6.707L6.104 18.604l-.707-.707L17.293 6H13z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                </a>
            </div>
        </div>
    </div>
</div>
