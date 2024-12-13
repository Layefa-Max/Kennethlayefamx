(function() {
    emailjs.init("YOUR_USER_ID");  // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(() => {
            alert("Message sent successfully!");
            document.getElementById('contact-form').reset();
        }, (error) => {
            alert("Failed to send message: " + error.text);
        });
});