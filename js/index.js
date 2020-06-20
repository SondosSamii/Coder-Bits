$(document).ready(function () {
    const lis = document.querySelectorAll('.navbar li');
    // console.log(lis);

    window.addEventListener('scroll', function (e) {
        // console.log(window.scrollY);
        for (let i = 0; i < lis.length; i++) {
            lis[i].classList.remove("current");
            if (window.scrollY > 0 && window.scrollY < 620) {
                lis[0].classList.add("current");
            }
            else if (window.scrollY >= 620 && window.scrollY < 1800) {
                lis[1].classList.add("current");
            }
            else if (window.scrollY >= 1800 && window.scrollY < 3020) {
                lis[2].classList.add("current");
            }
            else if (window.scrollY >= 3020 && window.scrollY < 4800) {
                lis[3].classList.add("current");
            }
            else if (window.scrollY >= 4800) {
                lis[4].classList.add("current");
            }
        }
    });

    $(".navbar-nav li").click(function () {
        $(".navbar-nav li").not($(this)).removeClass("current");
        $(this).addClass("current");
    });

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
