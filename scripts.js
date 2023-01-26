// anime scroll up
const rollup = document.querySelectorAll(".anime_scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.7,
  }
);

rollup.forEach((fx) => {
  observer.observe(fx);
});

// anime scroll up for hero
window.onload = () => {
  setTimeout(() => {
    const anm = document.querySelectorAll(".anime");
    anm.forEach((element) => {
      element.classList.add("show");
    });
  }, 1300);
};

// loader with anime hero
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("preloader--hidden");
});

// evil stagger
const stg = document.querySelectorAll(".stg");
stg.forEach((element) => {
  element.classList.add("stagger");
});
const myText = new SplitType(".stagger");
gsap.registerPlugin(ScrollTrigger);
gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.25,
  duration: 0.1,
});

// penis function (???)
const lenis = new Lenis({
  duration: 1,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let navbar = document.getElementsByClassName("navbar")[0];
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("navbar-hidden");
    navbar.classList.add("navbar-show");
  } else {
    navbar.classList.remove("navbar-show");
    navbar.classList.add("navbar-hidden");
  }
  prevScrollpos = currentScrollPos;
};
