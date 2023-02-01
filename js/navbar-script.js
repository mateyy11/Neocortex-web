const toggleButton = document.querySelector(".clickme");
const navbarLinks = document.querySelector(".nav_res");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
