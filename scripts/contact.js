const contact = {};

contact.init = function() {
  // Add event listener to contact section form
  const contactSubmission = document.querySelector('.contactSubmission');
  contactSubmission.addEventListener('submit', (event) => {
    event.preventDefault();
    app.validateFormInput(app.sendMessage);
  });

  // Add event listener to modal overlay
  const overlay = document.querySelector('.overlay');
  const button = document.querySelector('.clearModal');
    // Hide modal
  button.addEventListener('click', (event) => {
    event.preventDefault();
    overlay.classList.toggle('invisible');
  })
}

contact.init();