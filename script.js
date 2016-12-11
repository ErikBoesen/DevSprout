/* jshint jquery: true, browser: true */

var menu = function() {
    var isMenuOpen = false;
    $(".menu-button").click(function() {
        if (isMenuOpen === false) {
            $(".menu").stop();
            $(".menu").animate({
                left: "6vw"
            }, 200);
            $(".menu-button").animate({
                transform: "rotate(90deg)"
            }, 200);
            $(".menu-cover").animate({
                bottom: "0"
            }, 200);

            isMenuOpen = true;
        }
        else {
            $(".menu").stop();
            $(".menu").animate({
                left: "100vw"
            }, 200);
            $(".menu-button").animate({
                left: "15px"
            }, 200);
            $(".menu-cover").animate({
                bottom: "100vh"
            }, 200);

            isMenuOpen = false;
        }
    });
};

addEventListener("load", menu);