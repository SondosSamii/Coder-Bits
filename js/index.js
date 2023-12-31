const t0 = performance.now();

const list = document.querySelectorAll(".navbar li");
list.forEach((item) => {
  item.addEventListener("click", handleCurrentClass);
});

function handleCurrentClass(e) {
  list.forEach((item) => {
    if (e.target.matches("a")) {
      item.querySelector("a").classList.remove("current");
    }
    e.target.classList.add("current");
  });
}

const counterStart = performance.now();
setTimeout(counter, 0);
clearTimeout(counter, 0);
const counterEnd = performance.now();

function counter() {
  $(".counter h3").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
}
