const contactButton = document.getElementById('contactButton');

if (contactButton) {
  contactButton.addEventListener('click', () => {
    window.alert('Hello! You can update this button to send a message or open your email client.');
  });
}
