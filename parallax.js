// Connect to dropdown menu
const hamToggle = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
