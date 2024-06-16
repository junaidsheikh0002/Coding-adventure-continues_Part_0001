// This script can be used to add interactivity to your single-page website. 
// For example, you can handle smooth scrolling to different sections when clicking on navigation links.

// Here's a basic example using vanilla JavaScript:
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.getElementById(this.getAttribute('href').slice(1));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});