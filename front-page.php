<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package aquaar
 */

get_header();
?>

	<main id="primary" class="site-main">
		
		<?php get_template_part('template-parts/sections/hero'); ?>
		
		<?php get_template_part('template-parts/sections/services'); ?>
		<?php get_template_part('template-parts/sections/projects'); ?>
		<?php get_template_part('template-parts/sections/about'); ?>
		<?php get_template_part('template-parts/sections/contact'); ?>

	</main><!-- #main -->

<?php
get_footer();
