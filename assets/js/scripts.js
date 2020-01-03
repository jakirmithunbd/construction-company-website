
(function($){
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);

    if ( !isIE ) {
        //IE specific code goes here
        "use strict";
    }

      /*** Sidr Menu */
    $('.navbar-toggle').sidr({
        name: 'sidr-main',
        side: 'right',
        source: '#sidr',
        displace: false,
        renaming: false
    });

    /*** Header height = gutter height */
    function headersetGutterHeight(){
        var footer = document.querySelector('.header'),
            gutter = document.querySelector('.header_gutter');
            gutter.style.height = footer.offsetHeight + 'px';
    }

    window.onload = headersetGutterHeight;
    window.onresize = headersetGutterHeight;

$("document").on("click",function(e) { $.sidr('close','sidr-main'); });

    $('.closeMenu').on('click', function(){
        $.sidr('close', 'sidr-main');
    });

    /*** Sticky header */
    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
          $(".header").addClass("sticky");
        } 
        else {
          $(".header").removeClass("sticky");
        }
    });

     // Silder
    $(".testimonial-slider-wrapper").slick({
        // dots: true,
        infinite: true,
        draggable: true,
        slidesToShow: 1,
        // autoplay: true,
        slidesToScroll: 1,
        arrows: true,
    });


    
})(jQuery);