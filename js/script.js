jQuery(document).ready(function($){
    navOnScroll();
    toggleContent();

    accordion();
    // sliders
    scrollingBanner();

    customFormButton();
    backToTop();
    smoothScroll();
    mobileMenu();

    splitTextIntoSpans();
    animateOnScroll();

   
});


jQuery(window).scroll(function($){
    navOnScroll();
    animateOnScroll();
});


// Nav on scroll
function navOnScroll() {
    var headerWrapper = jQuery('.header');
  
    if (headerWrapper.offset().top > 50){
      headerWrapper.addClass('scrolled');
    } else {
      headerWrapper.removeClass('scrolled');
    }
}

// sliders
function scrollingBanner() {
    if ($('.scrolling-banner-slick').length) { // Check if element exists
        $('.scrolling-banner-slick').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            arrows: false,   
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 6000,
            cssEase: "linear",
            pauseOnHover: false,
            pauseOnFocus: false,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 5,
                        speed: 4000,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }
}

// accordian
function accordion() {
    if (self.innerWidth) {
      x = self.innerWidth;
    } else if (document.body) {
        x = 600;
    }
  
    jQuery('.accordion .accordion-q').on('click', function() {
      var answer = jQuery(this).next();
      var parentRow = jQuery(this).closest('.accordion-row');
  
      if (x > 601) { jQuery('.accordion-a').not(answer).slideUp(); }
  
      answer.slideToggle();
  
      if (x > 601) { jQuery('.accordion-row').not(parentRow).removeClass('accordion-active'); }
      parentRow.toggleClass('accordion-active');
  
  
    });
}

function customFormButton() {
    jQuery('.wpcf7-submit').after(`
        <button class="btn-flip-green">
            <span class="front">Send message</span>
            <span class="back">Send message</span>
        </button>
    `);
  
    // When the custom button is clicked, trigger the hidden submit button
    jQuery('.btn-flip-green').on('click', function(e) {
        e.preventDefault();
        jQuery(this).closest('.wpcf7-form').find('.wpcf7-submit').click();
    });
}
  
// back to top
function backToTop() {
    $('.back-to-top').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        $('html, body').animate({ scrollTop: 0 }, 'slow'); // Smooth scroll to top
    });
}

function smoothScroll() {
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 700, function() {
              var $target = $(target);
              $target.focus();
              if (!$target.is(":focus")) {
                $target.attr('tabindex','-1');
                $target.focus();
              }
            });
          }
        }
    });
}

// mobile nav
function mobileMenu() {
    jQuery('.menu-icon').on('click', function() {
      var $this = jQuery(this);

      jQuery('.header-nav').toggleClass('header-nav-active');
      $this.toggleClass('menu-icon-close');
    });

    jQuery('.menu-item').on('click', function() {
      jQuery('.header-nav').removeClass('header-nav-active');
      jQuery('.menu-icon').removeClass('menu-icon-close');
    });
}

// split words
function splitTextIntoSpans() {
    $('.split-text').each(function() {
        var $this = $(this); // Store the current element
        var text = $this.text(); // Get the text of the current element
        var letters = text.split(''); // Split text into letters
        $this.empty(); // Clear original text
        
        // Wrap each letter in a span and append it back to the current element only
        $.each(letters, function(index, letter) {
            $('<span>' + letter + '</span>').appendTo($this); // Append to the current element
        });
    });
}


function animateOnScroll() {
    const wScroll = jQuery(this).scrollTop();

    const about = jQuery('.about-section').offset().top - 400;
    const service = jQuery('.section-services').offset().top - 600;
    const contact = jQuery('.section-contact').offset().top - 600;


    function animateText(className) {
        jQuery(`.${className}`).each(function(i) {
            var $this = $(this); // Store the current span in a variable
            setTimeout(function() {
                $this.addClass('scrolled'); // Add the class only to the current span
            }, 140 * (i + 1));
        });
    }


    // about section   
    if(wScroll>about) {
        
        // animate img
        $('.about-section .section-image img, .about-section .pre-text').addClass('scrolled');

        // animate text
        animateText('about-section .pre-text span');
     } 

     // service
     if(wScroll>service) {

         // animate text
        $('.section-services .pre-text').addClass('scrolled');
        animateText('section-services .pre-text span');

        // animate accordion
        $('.section-services .accordion').addClass('scrolled');
     }

     // contact
    if(wScroll>contact) {

        // animate text
        $('.section-contact .pre-text').addClass('scrolled');
        animateText('section-contact .pre-text span');
    }
}

function toggleContent() {
    $('.services-nav li a').on('click', function() {
        const $this = jQuery(this);
        const dataId = $this.data('id');

       $this.addClass('active').siblings().removeClass('active');
       $('.services-nav li a').not($this).removeClass('active');

       $('#' + dataId).addClass('active').siblings().removeClass('active');
    });
}