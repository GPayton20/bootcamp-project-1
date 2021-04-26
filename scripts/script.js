const app = {};

app.init = function() {
  // Get elements from DOM and store in variables
  const triptych = document.querySelector('.triptych');
  const overlay = document.querySelector('.imageOverlay');
  const closeButton = document.querySelector('.closeButton');
  const image = document.querySelector('.carouselImage');
  
  // Add event listener to gallery images
  triptych.addEventListener('click', (event) => {
    // Make sure user has clicked an image
    if (event.target.src) {
      // Change image source
      // ! PLACEHOLDER CODE, BUILD EXTRA DIV'S AND FUNCTION TO ASSIGN IMG SRC
      image.setAttribute('src', event.target.src);
      overlay.classList.toggle('invisible');
    }
  });

  // Add event listener to close button
  closeButton.addEventListener('click', () => {
    overlay.classList.toggle('invisible');
  })
}



// Functions for form submission

// General input validation
app.validateFormInput = function(callback) {
  // Get values from inputs
  const userName = document.getElementById('name').value;
  const userEmail = document.getElementById('email').value;
  const userMessage = document.querySelector('textarea').value;

  // If user has input valid values
  if (userName && userEmail && userMessage) {
    // Pass name and message to callback function
    callback(userName, userMessage);
    // Clear inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.querySelector('textarea').value = '';
  }

}

// Blog comment submission
app.printComment = function(name, comment) {
  const newComment = document.createElement('article');
  newComment.classList.add('commentPost');
  // Get current date in human-readable format
  const date = new Date().toDateString();
  
  // Build boilerplate HTML for new comment
  newComment.innerHTML = `
  <img src="http://placekitten.com/90/90" alt="User profile image">
  <div class="textContainer">
    <span class="byline">${date} by ${name}</span>
    <p></p>
  </div>
  `;

  // Add comment text in secure fashion
  newComment.querySelector('p').innerText = comment;

  const blogSection = document.querySelector('.blogSection');
  const form = document.querySelector('form');

  // Add new comment to section, after last comment but before form
  blogSection.insertBefore(newComment, form);

}

// Contact message submission
app.sendMessage = function(name) {
  const overlay = document.querySelector('.overlay');
  const modalText = document.querySelector('.modalMessage p');
  const okButton = document.querySelector('.clearModal');
  
  modalText.innerText = `Thank you, ${name}! Your message has been sent!`;
  okButton.setAttribute('tabindex', '1');
  okButton.focus();
  
  overlay.classList.toggle('invisible');
}


app.init();
