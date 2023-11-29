/* ========================
    MAIN JS INDEXING
 ========================

 01.  Header Cart
 02.  Hamburger
 03.  Price Slider Active
 04.  Quantity
 05.  Nice Select
 06. Shipping Form Toggle
 07. Payment Method Select
 08. Add To Cart Animation
 09. Mobile Menu
 10. Youtube Popup
 11. Odometer Activation
 12. Testimonial Activation
 13. Instagram Activation
 14. Product Details Images
 15. Quick View Modal
 16. Slider Activation
 17. Scroll Up Activation

 __ END MAIN JS INDEXING

 ***************************************************************/


(function ($) {
    'use strict';
    /*--------------------
       01.  Header Cart
    ------------------------*/
    const headerCart = $('.header-cart'),
        closeCart = $('.close-cart, .body_overlay'),
        miniCartWrap = $('.mini-cart-wrap');

    headerCart.on('click', function (e) {
        e.preventDefault();
        $('.body_overlay').addClass('visible');
        miniCartWrap.addClass('open');
    });
    closeCart.on('click', function (e) {
        e.preventDefault();
        $('.body_overlay').removeClass('visible');
        miniCartWrap.removeClass('open');
    });


    /*--------------------
       02.  Hamburger
    ------------------------*/
    const navTrigger = document.querySelector('.mobile-toggle'),
        navMenu = document.querySelector('.mainmenu_nav');

    const openNav = function openNav() {
        navTrigger.classList.add('active');
        navMenu.classList.add('active')
    }

    const closeNav = function closeNav() {
        navTrigger.classList.remove('active');
        navMenu.classList.remove('active')
    }

    navTrigger.addEventListener('click', function () {
        if (navTrigger.classList.contains('active')) {
            closeNav()
        } else {
            openNav()
        }
    })


    /*----------------------------------
        09. Mobile Menu
    ------------------------------------*/

    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOpen = document.querySelector('.menu-toggle');
    const mobileClose = document.querySelector('.close-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');

    const mobileMenuOpen = (MenuOpen)=>{
        mobileMenu.classList.add('open');
        menuOverlay.classList.add('open');
    }

    const mobileMenuClose = (MenuClose)=>{
        mobileMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
    }

    mobileOpen.addEventListener('click', ()=>{
        mobileMenuOpen();
    });
    mobileClose.addEventListener('click', ()=>{
        mobileMenuClose();
    });
    menuOverlay.addEventListener('click', ()=>{
        mobileMenuClose();
    });


    function menuScript() {
        
        /*Variables*/
        var $offCanvasNav = $('.mobile-menu-items'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

        /*Close Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.slideUp();

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
            var $this = $(this);
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active-expand');
                    $this.siblings('ul').slideUp();
                } else {
                    $this.parent('li').addClass('active-expand');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.closest('li').siblings('li').removeClass('active-expand');
                    $this.siblings('ul').slideDown();
                }
            }
        });

        $( ".dropdown" ).parent( "li" ).addClass( "menu-item-has-children" );
    }
    menuScript();


    /*-------------------------------
       03.  Price Slider Active
    ----------------------------------*/
    $('.nstSlider').nstSlider({
        'left_grip_selector': '.leftGrip',
        'right_grip_selector': '.rightGrip',
        'value_bar_selector': '.bar',
        'value_changed_callback': function (cause, leftValue, rightValue) {
            $(this).parent().find('.leftLabel').text(leftValue);
            $(this).parent().find('.rightLabel').text(rightValue);
        }

    });


    /*--------------------------------
       04.  Quantity
    -------------------------------*/
    const proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    $('.qtybtn').on('click', function () {
        const $button = $(this);
        const oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });


    /*----------------------
       05.  Nice Select
    ------------------------*/
    $('.nice-select').niceSelect()

    /*-----------------------------
        06. Shipping Form Toggle
    --------------------------------*/
    $('[data-shipping]').on('click', function () {
        if ($('[data-shipping]:checked').length > 0) {
            $('#shipping-form').slideDown();
        } else {
            $('#shipping-form').slideUp();
        }
    })

    /*-----------------------------
        07. Payment Method Select
    --------------------------------*/
    $('[name="payment-method"]').on('click', function () {
        const $value = $(this).attr('value');
        $('.single-method p').slideUp();
        $('[data-method="' + $value + '"]').slideDown();
    })

    /*----------------------------------
        08. Add To Cart Animation
    ------------------------------------*/
    $('.add-to-cart').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('added')) {
            $(this).removeClass('added').find('i').removeClass('ti-check').addClass('ti-shopping-cart').siblings('span').text('add to cart');
        } else {
            $(this).addClass('added').find('i').addClass('ti-check').removeClass('ti-shopping-cart').siblings('span').text('added');
        }
    });


    /*----------------------------------
        10. Youtube Popup
    ------------------------------------*/
    $('.play__btn').yu2fvl();


    /*----------------------------------
        11. Odometer Activation
    ------------------------------------*/
    const odometer = $('.odometer');
    if (odometer.length) {
        $(window).on('scroll', function () {
            function winScrollPosition() {
                const scrollPos = $(window).scrollTop(),
                    winHeight = $(window).height();
                return Math.round(scrollPos + (winHeight / 1.2));
            }

            const scrollPos = $(this).scrollTop(),
                elemOffset = odometer.offset().top,
                winHeight = $(window).height();

            if (elemOffset < winScrollPosition()) {
                odometer.each(function () {
                    $(this).html($(this).data('count-to'));
                });
            }
        });
    }

    /*----------------------------------
        12. Testimonial Activation
    ------------------------------------*/
    $('.testimonial_activation').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /*----------------------------------
        13. Instagram Activation
    ------------------------------------*/
    $('.instagram_list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    });

    /*----------------------------------
        14. Product Details Images
    ------------------------------------*/
    $('.product-details-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
        nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
        asNavFor: '.product-details-thumbs'
    });
    $('.product-details-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
        nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
        asNavFor: '.product-details-images'
    });

    /*----------------------------------
        15. Quick View Modal
    ------------------------------------*/
    $('.quickview').on('click', function (e) {
        e.preventDefault();
        $('.quick-view-modal').toggleClass('is-visible');
    });

    $('.close-quickview-modal').on('click', function () {
        $('.quick-view-modal').removeClass('is-visible');
    });


    /*----------------------------------
        16. Slider Activation
    ------------------------------------*/
    $('.slide_active').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    /*----------------------------------
        17. Scroll Up Activation
    ------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });

    
})(jQuery);