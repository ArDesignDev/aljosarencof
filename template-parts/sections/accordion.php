<div class="accordion">
    <?php if (have_rows('accordion_items')): ?>
        <?php while (have_rows('accordion_items')): the_row(); ?>
            <div class="accordion-row">
                <div class="accordion-q">
                    <h4><?php echo esc_html(get_sub_field('accordion_question')); ?></h4>
                </div>
                <div class="accordion-a">
                    <p><?php echo wp_kses_post(get_sub_field('accordion_answer')); ?></p>
                </div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</div>