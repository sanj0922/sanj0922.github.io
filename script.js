
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Grab input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can integrate email sending (e.g., EmailJS) or AJAX request
    console.log('Form submitted:', { name, email, message });

    // Show confirmation message
    formMessage.style.display = 'block';

    // Optional: Reset the form
    form.reset();
});


