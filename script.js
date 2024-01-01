// Sticky Navbar
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

// Hamburger Menu
let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Typewriter effect
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer"],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});


// on form submit
const scriptURL = 'https://script.google.com/macros/s/AKfycbxEpOAkW_eBwBbKjpd0TSsgAvv3e130XdBYhfDfFlI-tbS-ejFfKpqpkSYNVPYcpXw/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  // Validation logic
  const fullName = form['full_name'].value.trim();
  const email = form['userEmail'].value.trim();
  const mobileNumber = form['m_number'].value.trim();
  const subject = form['subject'].value.trim();
  const message = form['message'].value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10}$/;

  if (fullName === '' || email === '' || mobileNumber === '' || subject === '' || message === '' ||
    !emailRegex.test(email) || !mobileRegex.test(mobileNumber)) {
    alert('Please fill in all fields correctly');
    return; // Prevent form submission if validation fails
  }

  // If validation passes, submit the form
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        alert("Thank you! Your form is submitted successfully.");
        window.location.reload();
      } else {
        throw new Error('Form submission failed!');
      }
    })
    .catch(error => console.error('Error!', error.message));
});
