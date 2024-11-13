<section class="section section-contact" id="contact">
    <div class="container">
        
        <!-- Left Section: Contact Content from ACF Fields -->
        <div class="section-content">
            <?php
            // Access fields within the contact_content group
            $contact_content = get_field('contact_content');
            
            if ($contact_content):
                if ($title = $contact_content['contact_title']): ?>
                    <h2 class="section-title fade-in"><?php echo esc_html($title); ?></h2>
                <?php endif; ?>

                <?php if ($description = $contact_content['contact_description']): ?>
                    <div class="section-desc fade-in">
                        <?php echo wp_kses_post($description); ?>
                    </div>
                <?php endif; ?>

            <?php endif; ?>
            <div class="section-form fade-in">
                <?php echo do_shortcode('[contact-form-7 id="733af6a" title="Contact us"]'); ?>
            </div>
        </div>

    </div>
</section>
