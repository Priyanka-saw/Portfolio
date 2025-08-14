const themeToggler = document.getElementById("themeToggler");
const lightIcon = document.getElementById("lightModeIcon");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  lightIcon.classList.toggle("active");
});

// Reveal on scroll
window.addEventListener("scroll", revealOnScroll);
function revealOnScroll() {
  document.querySelectorAll(".scroll").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 150) {
      el.classList.add("active");
    }
  });
}
revealOnScroll();

// Mobile navbar
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const navLinks = document.getElementById('navLinks');
const links = document.querySelectorAll('#navLinks a');

mobileMenuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
links.forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('show');
}));

// Smooth scroll
document.getElementById('about-link').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('projects-link').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contact-link').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById("home-link")?.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
});

// Active link highlight on scroll
const sections = document.querySelectorAll("section, .about-container, .project-section, .get-in-touch");
const navItems = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Contact form
const form = document.querySelector(".contact-form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  form.querySelector('button').disabled = true;

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Oops! Something went wrong.");
  }
  form.querySelector('button').disabled = false;
});
