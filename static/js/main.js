$('.responsive-slide').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 3,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.team-slide').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  autoplay: true,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// HERO

jQuery(document).ready(function ($) {
  $('.home-slide').slick({
  dots: false,
      pauseOnHover: false,
      infinite: true,
      speed: 500,
      fade: !0,
      cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
      autoplay: true,
  autoplaySpeed: 5000,
      draggable: false,
  arrows: false,
  responsive: [
    {
  breakpoint: 1024,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
      infinite: true
            }
      },
      {
  breakpoint: 768,
  settings: {
      draggable: true,
            }
  },
  {
  breakpoint: 600,
  settings: {
      slidesToShow: 1,
      draggable: true,
  slidesToScroll: 1
          }
  },
  {
  breakpoint: 480,
  settings: {
      slidesToShow: 1,
      draggable: true,
  slidesToScroll: 1
            }
  }

          ]
                });
      });

// SINGLE LISTING SLIDER
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  adaptiveHeight: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

// LIGHTBOX
$('.slider-for').slickLightbox();

document.addEventListener('DOMContentLoaded', () => {
  
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


    // Check for click events on the navbar burger icon
    $(".main-drop").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-dropdown", this).toggleClass("is-active");
    });