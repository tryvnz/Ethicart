// Form submission alert
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});

// Toggle mobile menu
const menuIcon = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.navbar-links');

menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});
