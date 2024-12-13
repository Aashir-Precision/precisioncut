// script.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// JavaScript for form validation and alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  
  // Get form fields
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Validate fields
  if (!firstName || !lastName || !email || !phone) {
    alert("Please fill in all fields.");
    return;
  }

  // Display success message
  alert("Thank you for contacting us!");
});
