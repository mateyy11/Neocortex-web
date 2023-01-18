const myText = new SplitType(".stagger");
gsap.registerPlugin(ScrollTrigger);
gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});

const lenis = new Lenis({
  duration: 1.2,
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
