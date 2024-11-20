jQuery(document).ready(function($){

    loader();
    setTimeout(animationOnLoad, 600);

    navOnScroll();
    smoothScroll();
    mobileMenu();
    toggleContent();
    readMore();

    checkFadeIn();
    splitText();

    animateOnScroll();

    skillSet();
    
    // accordion();
    // sliders
    // scrollingBanner();
    // backToTop();
    //splitTextIntoSpans(); 

    //swiperSlider();
});


jQuery(window).scroll(function($){
    navOnScroll();
    checkFadeIn();
    animateOnScroll();
});

function isInViewport(element) {
    const elementTop = $(element).offset().top;
    const elementBottom = elementTop + $(element).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    
    // Check if element is within a buffer (adjust buffer as needed)
    return elementBottom > viewportTop + 100 && elementTop < viewportBottom - 100;
  }

function checkFadeIn() {
    $('.fade-in').each(function () {
        if (isInViewport(this)) {
            $(this).addClass('active');
        }
    });
}

function animationOnLoad() {

    $('.hero-subtitle').addClass('active');

    setTimeout(function() {

        jQuery('.hero-title .letters').each(function(i){
          setTimeout(function(){
            jQuery('.hero-title .letters').eq(i).addClass('active');
          }, 60 * (i+1));
        });
    
    }, 200);

    setTimeout(function() {
        $('.hero-content .hero-btn').addClass('active');
    }, 1800);
    
}

function readMore() {
    $('.about-desc-toggle').on('click', function() {
        $('.about-desc-more').slideToggle();
        $('.about-desc-toggle').toggleClass('active');
    });
}

function loader() {
    jQuery('.loader').fadeOut('fast');
    jQuery('.loader-screen').delay(500).fadeOut('slow');
}

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

// split text
function splitText() {
    $('.text-split').each(function() {
        let words = $(this).text().split(' '); // Split text by spaces into words
        let wrappedWords = words.map(word => {
            let letters = word.split(''); // Split each word into letters
            let wrappedLetters = letters.map(letter => `<span class="letters">${letter}</span>`).join(''); // Wrap each letter
            return `<span class="words">${wrappedLetters}</span>`; // Wrap each word
        });
        $(this).html(wrappedWords.join(' ')); // Join words back with spaces and replace HTML
    });
}

function animateLetters(selector, interval, activeClass) {
    jQuery(selector).each(function(i) {
        setTimeout(function() {
            jQuery(selector).eq(i).addClass(activeClass);
        }, interval * (i + 1));
    });
}

function animateOnScroll() {
    const wScroll = jQuery(this).scrollTop();

    const about = jQuery('.about').length ? jQuery('.about').offset().top - 600 : null;
    const services = jQuery('.services').length ? jQuery('.services').offset().top - 600 : null;
    const projects = jQuery('.categories-section').length ? jQuery('.categories-section').offset().top - 600 : null;
    const contact = jQuery('.contact').length ? jQuery('.contact').offset().top - 600 : null;

   
    if(wScroll>about) {
        animateLetters('.about .letters', 40, 'active')
    }

    if(wScroll>services) {
        animateLetters('.services .letters', 40, 'active')
    }

    if(wScroll>projects) {
        animateLetters('.categories-section .letters', 40, 'active')
    } 

    if(wScroll>contact) {
        animateLetters('.contact .letters', 40, 'active')
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

function swiperSlider() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        freeMode: true,
        loop: true,
        allowTouchMove: false,
        autoplay: {
        delay: 0,
        disableOnInteraction: false,
        },
        slidesPerView: 2.5,
        spaceBetween: 0,
        speed: 6000,
        breakpoints: {
            1400: {
              slidesPerView: 7.5, 
            },
            1100: {
                slidesPerView: 4.5, 
            },
            700: {
                slidesPerView: 3.5, 
              },
          }
    });
}

function skillSet() {
    const skillsText = $('.skills-text').text(); // Get the raw text from the field
    const skillsArray = skillsText.split('|'); // Split the text by '|'

    // Create the spans and insert them into the container
    let spansHTML = '';
    skillsArray.forEach(skill => {
        const trimmedSkill = skill.trim(); // Remove any extra whitespace
        if (trimmedSkill) {
            spansHTML += `<span>${trimmedSkill}</span>\n`;
        }
    });

    // Replace the original content with the spans
    $('.skills-text').html(spansHTML);
}