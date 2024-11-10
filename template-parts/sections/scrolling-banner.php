<section class="scrolling-banner">
    <div class="scrolling-banner-inner">
        <div class="scrolling-banner-slick">
            <?php if (have_rows('scrolling_banner_items')): ?>
                <?php while (have_rows('scrolling_banner_items')): the_row(); ?>
                    <div class="scrolling-banner-item">
                        <p><?php echo esc_html(get_sub_field('banner_item_text')); ?></p>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</section>
