(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        jQuery(".menu-trigger").click(function () {
            jQuery(".main-menu ul").fadeToggle(600, function () {
            });
        });
    });


    jQuery(window).load(function () {
        setTimeout(function () {
            $('#preloader').fadeOut('slow', function () {
            });
        }, 2000);
    });

}(jQuery));

