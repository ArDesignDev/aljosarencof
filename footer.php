<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package aquaar
 */

?>

	<footer class="footer">
		<div class="row row-center">
			<div class="col-sm-3 mobile-last">
				<p class="footer-copy">&copy; <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?></p>	
			</div>
			<div class="col-sm-6">
				
			<?php
			$in_link = get_field('linkedin', 'option');
			$yt_link = get_field('youtube', 'option');
			$ig_link = get_field('instagram', 'option');
			$fb_link = get_field('facebook', 'option');

			if ($in_link):
				$in_link_url = esc_url($in_link['url']);
				$in_link_text = esc_html($in_link['title']);
			endif; 

			if ($yt_link):
				$yt_link_url = esc_url($yt_link['url']);
				$yt_link_text = esc_html($yt_link['title']);
			endif;

			if ($ig_link):
				$ig_link_url = esc_url($ig_link['url']);
				$ig_link_text = esc_html($ig_link['title']);
			endif;

			if ($fb_link):
				$fb_link_url = esc_url($fb_link['url']);
				$fb_link_text = esc_html($fb_link['title']);
			endif;
			?>
			<ul class="footer-social">
				<?php if ($in_link): ?><li><a href="<?php echo $in_link_url; ?>" target="_blank"><?php echo $in_link_text; ?></a></li> <?php endif; ?>
				<?php if ($yt_link): ?><li><a href="<?php echo $yt_link_url; ?>" target="_blank"><?php echo $yt_link_text; ?></a></li> <?php endif; ?>
				<?php if ($ig_link): ?><li><a href="<?php echo $ig_link_url; ?>" target="_blank"><?php echo $ig_link_text; ?></a></li> <?php endif; ?>
				<?php if ($fb_link): ?><li><a href="<?php echo $fb_link_url; ?>" target="_blank"><?php echo $fb_link_text; ?></a></li> <?php endif; ?>
			</ul>

			</div>
			<div class="col-sm-3 footer-top">
				<?php $backToTop = get_field('back_to_top', 'option'); ?>
				<a href="javascript:;" class="back-to-top">
					<?php if ($backToTop): ?>
						<?php echo wp_kses_post($backToTop); ?>
						<?php else: ?>
						Back to Top
					<?php endif; ?>
				</a>
			</div>
		</div>
	</footer><!-- .site-footer -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
