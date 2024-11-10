<section class="services" id="services">
    <div class="container">
        <div class="services-header">
            <h2><?php the_field('service_title'); ?></h2>
        </div>

        <?php
        $services = get_field('services'); 
        ?>

        <ul class="services-nav">
            <li>
                <a href="javascript:;" class="active" data-id="service-1">
                    <img src="<?php echo esc_url($services['service_image_1']['url']); ?>" alt="<?php echo esc_attr($services['service_1']); ?>" class="service-icon">
                    <?php echo $services['service_1']; ?>
                </a>
            </li>
            <li>
                <a href="javascript:;" data-id="service-2">
                    <img src="<?php echo esc_url($services['service_image_2']['url']); ?>" alt="<?php echo esc_attr($services['service_2']); ?>" class="service-icon">
                    <?php echo $services['service_2']; ?>
                </a>
            </li>
            <li>
                <a href="javascript:;" data-id="service-3">
                    <img src="<?php echo esc_url($services['service_image_3']['url']); ?>" alt="<?php echo esc_attr($services['service_3']); ?>" class="service-icon">
                    <?php echo $services['service_3']; ?>
                </a>
            </li>
            <!--
            <li>
                <a href="javascript:;" data-id="service-4">
                    <img src="<?php echo esc_url($services['service_image_4']['url']); ?>" alt="<?php echo esc_attr($services['service_4']); ?>" class="service-icon">
                    <?php echo $services['service_4']; ?>
                </a>
            </li>-->
        </ul>

        <div class="services-list">
            <div class="services-item active" id="service-1">
                <?php echo $services['service_content_1']; ?>
            </div>
            <div class="services-item" id="service-2">
                <?php echo $services['service_content_2']; ?>
            </div>
            <div class="services-item" id="service-3">
                <?php echo $services['service_content_3']; ?>
            </div>
            <!--
            <div class="services-item" id="service-4">
                <?php echo $services['service_content_4']; ?>
            </div> -->
        </div>

    </div>
</section>


