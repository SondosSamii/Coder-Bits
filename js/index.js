$(document).ready(function () {
    function toggleCurrentClass() {
        const lis = document.querySelectorAll('.navbar li');
        // console.log(lis);

        // console.log(window.scrollY);
        for (let i = 0; i < lis.length; i++) {
            lis[i].classList.remove("current");
            if (window.scrollY >= 0 && window.scrollY < 600) {
                lis[0].classList.add("current");
            }
            else if (window.scrollY >= 600 && window.scrollY < 1700) {
                lis[1].classList.add("current");
            }
            else if (window.scrollY >= 1700 && window.scrollY < 2900) {
                lis[2].classList.add("current");
            }
            else if (window.scrollY >= 2900 && window.scrollY < 4750) {
                lis[3].classList.add("current");
            }
            else if (window.scrollY >= 4750) {
                lis[4].classList.add("current");
            }
        }
    }
    window.addEventListener('scroll', toggleCurrentClass, true);

    window.removeEventListener('scroll', toggleCurrentClass, false);

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
