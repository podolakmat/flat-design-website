$(document).ready(function() {
    var n = '#nav__wrapper--list',
        no = 'nav__open';
    $('.nav__wrapper--hamburger, #nav__wrapper--list a').click(function() {
        if ($(n).hasClass(no)) {

            $(n).animate({
                height: 0
            }, 300);
            setTimeout(function() {
                $(n).removeClass(no).removeAttr('style');
            }, 1);
        } else {
            var newH = $(n).css('height', 'auto').height();
            $(n).height(0).animate({
                height: newH
            }, 300);
            setTimeout(function() {
                $(n).addClass(no).removeAttr('style');
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



});