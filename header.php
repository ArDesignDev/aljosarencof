<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package aquaar
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-VN6HCM6FC1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'G-VN6HCM6FC1');
	</script>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="loader-screen">
	<div class="loader"></div>
</div>

<!-- cursor effect -->
<div id="cursor"></div>
<div id="cursor-border"></div>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'aquaar' ); ?></a>

	<header id="masthead" class="header">
		<div class="header-inner">

			<div class="header-logo">
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php echo the_field('blog_name', 'option'); ?></a></h1>
			</div><!-- .header-logo -->

			<nav id="site-navigation" class="header-nav nav-toggle">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						)
					);
					?>
			</nav><!-- #site-navigation -->

			<div class="header-cta">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'cta',
						'menu_id'        => 'cta',
					)
				);
				?>
			</div><!-- .header-cta -->

			<div class="menu-icon">
				<div class="menu-icon-middle"></div>
			</div><!-- .menu-icon -->
			
		</div>
	</header><!-- #masthead -->
