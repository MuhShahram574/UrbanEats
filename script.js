const header = document.querySelector("header");
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const navLinks = document.querySelectorAll(".nav-links");
const heroSection = document.querySelector(".heros-section");

// Toggle mobile menu
mobileNavBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    header.classList.remove("nav-open");
  }
});

// Add header background when scrolling past hero section
window.addEventListener("scroll", () => {
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

  const scrollUp = document.querySelector(".scroll-up");
  if (window.scrollY >= heroBottom) {
    header.classList.add("scrolled");
    scrollUp.classList.remove("scroll-remove");
  } else {
    header.classList.remove("scrolled");
    scrollUp.classList.add("scroll-remove");
  }
});

// JavaScript for the preloader
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 500);
  });
});
