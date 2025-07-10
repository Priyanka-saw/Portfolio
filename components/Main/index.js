const themeToggler = document.getElementById("themeToggler");
const lightIcon = document.getElementById("lightModeIcon");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle icon highlight
  lightIcon.classList.toggle("active");
});

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

// navbar
    
  const mobileMenuIcon = document.getElementById('mobile-menu-icon');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('#navLinks a');

  mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

// scroll of direct sections
document.getElementById('about-link')
  .addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#about')
      .scrollIntoView({ behavior: 'smooth' });
  });

document.getElementById('projects-link')
  .addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#projects')
      .scrollIntoView({ behavior: 'smooth' });
  });

document.getElementById('contact-link').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
})


// response through contacts
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Oops! Something went wrong.");
  }
});
