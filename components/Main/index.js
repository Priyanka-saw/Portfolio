const themeToggler = document.getElementById("themeToggler");
const lightIcon = document.getElementById("lightModeIcon");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle icon highlight
  lightIcon.classList.toggle("active");
});

// 
  window.addEventListener("scroll", revealOnScroll);

  function revealOnScroll() {
    const scrollElements = document.querySelectorAll(".scroll");

    scrollElements.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  // Call once on load too
  revealOnScroll();


