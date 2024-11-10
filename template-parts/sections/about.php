<section class="section about" id="about">
    <div class="container">
        <div class="row">
            <!-- Image Column -->
            <div class="col-sm-5 about-images">
                <div class="about-images-inner">
                    <?php if ($image = get_field('about_image')): ?>
                        <figure class="about-image-1">
                            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" loading="lazy">
                        </figure>
                    <?php endif; ?>
                </div>
            </div>

            <!-- Text Column -->
            <div class="col-sm-7 about-content">
                <?php
                // Access fields within the about_content group
                $about_content = get_field('about_content');
                
                if ($about_content):
                    if ($title = $about_content['about_title']): ?>
                        <h2 class="section-title"><?php echo esc_html($title); ?></h2>
                    <?php endif; ?>

                    <?php if ($description = $about_content['about_description']): ?>
                        <div class="section-desc">   
                            <?php echo wp_kses_post($description); ?>
                        </div>
                    <?php endif;
                endif; ?>
            </div>

        </div>
    </div>
</section>
