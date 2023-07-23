(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    $(document).ready(function () {
      if (
        (new fullpage("#fullpage", { autoScrolling: !0 }),
        null !== document.querySelectorAll(".element-animation"))
      ) {
        function e(e) {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("_active")
              : e.target.classList.remove("_active");
          });
        }
        let t = new IntersectionObserver(e, { threshold: [0.7] }),
          n = document.querySelectorAll(".element-animation");
        for (let o of n) t.observe(o);
      }
    }),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
