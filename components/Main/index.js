const themeToggler = document.getElementById("themeToggler");
const lightIcon = document.getElementById("lightModeIcon");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle icon highlight
  lightIcon.classList.toggle("active");
});
