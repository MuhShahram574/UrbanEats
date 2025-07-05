const header = document.querySelector("header");
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const navLinks = document.querySelectorAll(".nav-links");
const heroSection = document.querySelector(".heros-section");
const hamBurger = document.querySelector(".mobile-nav-btn");
const aside = document.querySelector("aside");
const crossBtnBox = document.querySelector(".cross-btn-box");

function showNavbarMenu() {
  hamBurger.addEventListener("click", () => {
    hamBurger.classList.add("hidden");
    aside.classList.remove("hidden");
    aside.classList.add("fade-left");
    aside.classList.remove("fade-right");
  });
}
function hideNavbarMenu() {
  crossBtnBox.addEventListener("click", () => {
    hamBurger.classList.remove("hidden");
    aside.classList.add("fade-right");
    aside.classList.remove("fade-left");
  });
}

showNavbarMenu();
hideNavbarMenu();

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
  } else {
    header.classList.remove("scrolled");
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
