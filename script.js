const app = {};

app.init = function() {
  // Add event listener to blog section form
  const contactForm = document.querySelector('.contactForm');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    app.validateFormInput(app.printComment);
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


app.init();
