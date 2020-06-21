window.addEventListener('scroll', toggleCurrentClass, true);

window.removeEventListener('scroll', toggleCurrentClass, false);

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


function toggleCurrentClass() {
    const lis = document.querySelectorAll('.navbar li');
    // console.log(lis);

    // console.log(window.scrollY);
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove("current");
        if (window.scrollY >= 0 && window.scrollY < 614) {
            lis[0].classList.add("current");
        }
        else if (window.scrollY >= 614 && window.scrollY < 1800) {
            lis[1].classList.add("current");
        }
        else if (window.scrollY >= 1800 && window.scrollY < 3015) {
            lis[2].classList.add("current");
        }
        else if (window.scrollY >= 3015 && window.scrollY < 4810) {
            lis[3].classList.add("current");
        }
        else if (window.scrollY >= 4810) {
            lis[4].classList.add("current");
        }
    }
}