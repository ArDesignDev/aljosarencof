<div class="references section-active">
    <div class="container">
        <h2> <?php echo the_field('reference_title'); ?></h2>
        <p><?php echo the_field('references_text'); ?> </p>

        <div class="swiper-container">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <?php
                    $gallery = get_field('reference_logos');
                    if ($gallery):
                        foreach ($gallery as $image):
                            ?>
                            <div class="swiper-slide">
                                <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                            </div>
                            <?php
                        endforeach;
                    else:
                        ?>
                        <div class="swiper-slide">No logos found</div>
                        <?php
                    endif;
                    ?>
                </div>
            </div>
            <div class="swiper-reverse">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <?php
                        $gallery = get_field('reference_logos_2');
                        if ($gallery):
                            foreach ($gallery as $image):
                                ?>
                                <div class="swiper-slide">
                                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                                </div>
                                <?php
                            endforeach;
                        else:
                            ?>
                            <div class="swiper-slide">No logos found</div>
                            <?php
                        endif;
                        ?>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

