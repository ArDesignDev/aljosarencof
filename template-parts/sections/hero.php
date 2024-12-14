<section class="hero section-active" id="hero">
    <span aria-hidden="true" 
          class="hero-background"
          style="background-image:url('<?php echo esc_url(get_field('hero_background_image')); ?>');">
    </span>
    <div class="hero-content">
        <h3 class="hero-subtitle"><strong><?php echo esc_html(get_field('hero_subtitle')); ?></strong></h3>
        <h1 class="hero-title text-split"><?php echo esc_html(get_field('hero_main_title')); ?></h1>

        <?php
        $button_link = get_field('hero_button');

        if ($button_link):
            $button_url = esc_url($button_link['url']);
            $button_text = esc_html($button_link['title']);
            $button_target = $button_link['target'] ? esc_attr($button_link['target']) : '_self';
        ?>
        <div class="hero-btn">
            <a href="<?php echo $button_url; ?>" target="<?php echo $button_target; ?>" class="btn-flip">
                <span class="front"><?php echo $button_text; ?></span>
                <span class="back"><?php echo $button_text; ?></span>
            </a>
        </div>

        <?php endif; ?>
    </div>
</section>
