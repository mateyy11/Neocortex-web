// if (
//   navigator.userAgent.indexOf("Firefox") > -1 ||
//   navigator.userAgent.indexOf("Mozilla") > -1
// ) {
//   const lenis = new Lenis({
//     duration: 0.2,
//     easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
//     direction: "vertical",
//     gestureDirection: "vertical",
//     smooth: true,
//     smoothTouch: false,
//     touchMultiplier: 2,
//   });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);
// }
