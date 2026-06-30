// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Contact Form Demo
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Message sent successfully (demo).";
    contactForm.reset();
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();
