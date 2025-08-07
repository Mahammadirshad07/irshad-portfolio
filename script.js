document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  emailjs.sendForm('service_erv87qt', 'template_0r4lwcj', this)
    .then(function() {
      alert("Your Email has been sent.");
      e.target.reset(); 
    }, function(error) {
      alert("Error sending email: " + error.text);
    });
});
