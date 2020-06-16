$(document).ready(function () {
    $(".navbar-nav li").click(function () {
        $(this).addClass("current");
        $(".navbar-nav li").not($(this)).removeClass("current");
    });

    // window.addEventListener('scroll', function (e) {
    //     var scroll = this.window.scrollY;
    //     console.log(scroll);
    //     if (scroll == 600) {
    //         console.log(true);
    //         $(".navbar-nav:nth-child(2)").addClass("current");
    //         $(".navbar-nav:nth-child(2)").not($(this)).removeClass("current");
    //     }
    // });

    $('.counter h3').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});