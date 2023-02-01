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
