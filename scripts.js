// Book Now button functionality
document.getElementById('bookNow').addEventListener('click', function () {
    alert('Thank you for choosing On Drive Motors! Please contact us to schedule your appointment.');
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        alert('Thank you for choosing on drive motors, ' + name + '! Your message has been sent. We will get back to you soon.');
        document.getElementById('contactForm').reset(); // Clear the form after submission
    } else {
        alert('Please fill in all fields.');
    }
});
