jQuery.noConflict();
jQuery(document).ready(function ($) {

    //wow js
    new WOW().init();
    //nav animation
    var nav = $('nav');
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            nav.addClass('navfix');
        }
        else {
            nav.removeClass('navfix');
        }

    });

    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 5000,
    });

    //slick slider 
    $('.blog-slider').slick({
        slidesToShow: 3,
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
        responsive: [{

            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                infinite: true,
                arrows: false,
            }

        }, {

            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
});

