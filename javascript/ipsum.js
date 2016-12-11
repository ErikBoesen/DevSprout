var menu = function() {
    var isMenuOpen = false;
    $('#nav-button').click(function() {
        $(this).toggleClass('open', 200);
        if (isMenuOpen === false) {
            $('nav').stop();
            $('nav').animate({
                right: '6vw'
            }, 200);
            $('#nav-bar').animate({
                bottom: '0'
            }, 150);

            isMenuOpen = true;
        }
        else {
            $('nav').stop();
            $('nav').animate({
                right: '100vw'
            }, 200);
            $('#nav-bar').animate({
                bottom: '100vh'
            }, 150);

            isMenuOpen = false;
        }
    });
};

addEventListener('load', menu);
