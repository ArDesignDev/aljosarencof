<?php

/*
@package aquaAr

	========================
		ENQUEUE FUNCTIONS
	========================
*/

function aquaar_script_enqueue() {

	// style
    wp_enqueue_style( 'aquaar-style', get_stylesheet_uri(), array(), _S_VERSION );

    wp_enqueue_style('Montserrat', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'); // Font Family
    wp_enqueue_style('Secondary', 'https://fonts.googleapis.com/css2?family=Anton&display=swap'); // Font Family
    //wp_enqueue_style('Slick', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css', array(), '1.0.0.', 'all');
    wp_enqueue_style('customstyle', get_template_directory_uri() . '/css/main.min.css', array(), '1.0.5.', 'all');

    // script
    wp_deregister_script('jquery');
    wp_register_script('jquery', get_template_directory_uri() . '/js/jquery.js', false, '3.6.0', true);
    wp_enqueue_script('jquery');

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
    //wp_enqueue_script('slick', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', array(), '1.0.0', true);
    //wp_enqueue_script('lightbox', 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js', array(), '1.0.0', true);    
	//wp_enqueue_script('customjs', get_template_directory_uri() . '/js/script.js', array(), '1.1.5', true);
	wp_enqueue_script('customjs', get_template_directory_uri() . '/js/script.min.js', array(), '1.1.7', true);
}

add_action( 'wp_enqueue_scripts', 'aquaar_script_enqueue' );

// REMOVE UNUSED CODE
// emojis
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
