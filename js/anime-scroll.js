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
