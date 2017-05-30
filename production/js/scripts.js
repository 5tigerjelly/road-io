(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function(e) {
        $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
    });

})(jQuery);

$(window).load(function() {
    //normally you'd wait for document.ready, but you'd likely to want to wait
    //for images to load in case they reflow the page
    $('body').delay(65000) //wait 65000 milliseconds
        .animate({
            //animate jQuery's custom "scrollTop" style
            //grab the value as the offset of #second from the top of the page
            'scrollTop': $('.carousel-inner').offset().top
        }, 500); //animate over 300ms, change this to however long you want it to animate for
    $(".threeColPics").fadeIn("fast");
});
