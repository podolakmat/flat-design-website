$(document).ready(function() {
    var navList = '#nav__wrapper--list',
        navOpen = 'nav__open';
    $('.nav__wrapper--hamburger, #nav__wrapper--list a').click(function() {
        if ($(navList).hasClass(navOpen)) {
            $(navList).animate({
                height: 0
            }, 300);
            setTimeout(function() {
                $(navList).removeClass(navOpen).removeAttr('style');
            }, 1);
        } else {
            var newHeight = $(navList).css('height', 'auto').height();
            $(navList).height(0).animate({
                height: newHeight
            }, 300);
            setTimeout(function() {
                $(navList).addClass(navOpen).removeAttr('style');
            }, 320);
        }
    });

    var stickyOffset = $('#nav').offset().top;
    $(window).scroll(function() {
        var nav = $('#nav'),
            scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) nav.addClass('sticky');
        else nav.removeClass('sticky');
    });

    $('.testimonials__wrapper').slick({
        slidesToShow: 1,
        autoplay: true,
        mobileFirst: true,
        swipe: false,
        arrows: false,
        autoplaySpeed: 3000,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        touchMove: false,
    });

    var activeLink = $('.nav__active');
    var scrollLink = $('.scroll__link');
    var scrollLinkHeader = $('.scroll__link--header');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 2000);
    });

    scrollLinkHeader.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });

    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        activeLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 80;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
});