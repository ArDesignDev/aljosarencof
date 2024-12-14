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
    activeNavOnScroll();
    loadMorePosts();
    courserEffect();
    
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
    activeNavOnScroll();
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

function activeNavOnScroll() {
    var scrollDistance = jQuery(window).scrollTop();
  
    jQuery('.section-active').each(function(i) {
        if (jQuery(this).position().top-270 <= scrollDistance) {
            jQuery('#site-navigation ul li a.active-nav').removeClass('active-nav');
            jQuery('#site-navigation ul li a').eq(i).addClass('active-nav');
        }
    });
}

function loadMorePosts() {
  
    // Event listener for the Load More button
    jQuery(document).on('click', '#load-more', function() {
      var nextPage = parseInt(jQuery(this).data('page'), 10) + 1; // Increment the page number
  
      jQuery.ajax({
        url: ajax_url,
        type: 'POST',
        data: {
          action: 'filter_posts_by_category',
          page: nextPage
        },
        beforeSend: function() {
          jQuery('#load-more').text('Loading...'); // Show loading text
        },
        success: function(response) {
          
          if (response.trim() !== '') {
            // If the response has content, append the new posts
            var newItems = jQuery('<div/>').html(response).find('.post-item').hide();
            jQuery('#posts-container').append(newItems);
            
            // Add 'active' class to the first new item and fade it in immediately
            newItems.first().show().addClass('active');
            
            // Fade in the rest of the items with delay
            newItems.slice(1).each(function(i) {
              jQuery(this).delay(i * 300).fadeIn(600);
            });
  
            courserEffect();
  
            // Update the 'Load More' button with the new page number
            jQuery('#load-more').text('Load More').data('page', nextPage);
          } else {
            // If the response is empty, hide the Load More button
            jQuery('#load-more').text('No more projects');
          }
  
        },
        error: function() {
          // In case of an error, reset the Load More button text
          jQuery('#load-more').text('Load More');
        }
      });
    });
 }

function courserEffect() {
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };

  document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  requestAnimationFrame(function loop() {
    const easing = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;

    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);
  });

  // Reusable function to apply hover effects to a set of elements
  function applyHoverEffects() {
    document.querySelectorAll("a, .read-more, .btn, .wpcf7-submit, .btn-load-more, button").forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        cursorBorder.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        cursorBorder.style.setProperty("--size", "40px");
      });

      link.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "#2bd9e9";
        cursorBorder.style.setProperty("--size", "12px");
      });
    });

    document.querySelectorAll(".services-nav a").forEach((link) => {
        link.addEventListener("mouseover", (e) => {
          cursorBorder.style.backgroundColor = "rgba(14, 234, 241, 0.2)";
          cursorBorder.style.setProperty("--size", "40px");
        });
  
        link.addEventListener("mouseout", (e) => {
          cursorBorder.style.backgroundColor = "#2bd9e9";
          cursorBorder.style.setProperty("--size", "12px");
        });
      });

    document.querySelectorAll(".post-image").forEach((div) => {
      div.addEventListener("mouseover", (e) => {
        cursorBorder.style.backgroundColor = "rgba(0, 0, 0, 1)";
        cursorBorder.style.setProperty("--size", "90px");
        cursorBorder.textContent = "Visit website";
        cursorBorder.style.display = "flex";
        cursorBorder.style.alignItems = "center";
        cursorBorder.style.justifyContent = "center";
        cursorBorder.style.color = "#fff";
        cursorBorder.style.fontSize = "16px";
        cursorBorder.style.textAlign = "center";
      });

      div.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "#2bd9e9";
        cursorBorder.style.setProperty("--size", "12px");
        cursorBorder.textContent = "";
        cursorBorder.style.display = "block";
        cursorBorder.style.color = "unset";
      });
    });

    document.querySelectorAll(".service-section-more a").forEach((div) => {
      div.addEventListener("mouseover", (e) => {
        cursorBorder.style.backgroundColor = "#e31b6deb";
        cursorBorder.style.borderColor = "#e31b6deb";
        cursorBorder.style.setProperty("--size", "60px");
        cursorBorder.textContent = "Expend";
        cursorBorder.style.display = "flex";
        cursorBorder.style.alignItems = "center";
        cursorBorder.style.justifyContent = "center";
        cursorBorder.style.color = "#fff";
        cursorBorder.style.fontSize = "12px";
        cursorBorder.style.textAlign = "center";
        cursorBorder.style.fontWeight = "bold";
      });

      div.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.borderColor = "#2fc0cc";
        cursorBorder.style.setProperty("--size", "20px");
        cursorBorder.textContent = "";
        cursorBorder.style.display = "block";
        cursorBorder.style.color = "unset";
      });
    });

    document.querySelectorAll(".project-section-item-text button.read-more").forEach((div) => {
      div.addEventListener("mouseover", (e) => {
        cursorBorder.style.backgroundColor = "#e31b6deb";
        cursorBorder.style.borderColor = "#e31b6deb";
        cursorBorder.style.setProperty("--size", "60px");
        cursorBorder.textContent = "Pop up";
        cursorBorder.style.display = "flex";
        cursorBorder.style.alignItems = "center";
        cursorBorder.style.justifyContent = "center";
        cursorBorder.style.color = "#fff";
        cursorBorder.style.fontSize = "12px";
        cursorBorder.style.textAlign = "center";
        cursorBorder.style.fontWeight = "bold";
      });

      div.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.borderColor = "#2fc0cc";
        cursorBorder.style.setProperty("--size", "20px");
        cursorBorder.textContent = "";
        cursorBorder.style.display = "block";
        cursorBorder.style.color = "unset";
      });
    });
  }

  // Initially apply hover effects to all existing elements
  applyHoverEffects();

  // Return the applyHoverEffects function so it can be reused
  return applyHoverEffects;
}
