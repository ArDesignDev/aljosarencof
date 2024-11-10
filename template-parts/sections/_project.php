<?php
/**
 * Template part for displaying category posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package aquaar
 */

?>

<article id="post-<?php the_ID(); ?>" class="project">

	<div class="row">
		<div class="col-sm-4 project-content">
			<h3 class="project-title"> <?php the_title(); ?></h3>
			<div class="project-desc">
				<?php the_content(); ?>
			</div>

			<ul class="project-info">
				<?php if ($client = get_field('project_client')): ?>
					<li><strong><?php echo the_field('client_text', 'option'); ?></strong> <?php echo esc_html($client); ?></li>
				<?php endif; ?>
				<?php if ($date = get_field('project_date')): ?>
					<li><strong><?php echo the_field('date_text', 'option'); ?></strong> <?php echo esc_html($date); ?></li>
				<?php endif; ?>
				<?php if ($services = get_field('project_services')): ?>
					<li><strong><?php echo the_field('services_text', 'option'); ?></strong> <?php echo esc_html($services); ?></li>
				<?php endif; ?>
			</ul>
		</div>
		<div class="col-sm-8 project-video">
			<?php
				$video_file = get_field('project_video');
				if ($video_file) {
					echo '<video controls><source src="' . esc_url($video_file['url']) . '" type="video/mp4"></video>';
				}
			?>
		</div>
	</div>

</article><!-- #post-<?php the_ID(); ?> -->
