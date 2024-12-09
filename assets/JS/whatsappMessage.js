document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Get the form field values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `*Name*: ${firstName} ${lastName}\n*Email*: ${email}\n\n*Message*: ${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    const whatsappUrl = `https://wa.me/6281350474599?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
});