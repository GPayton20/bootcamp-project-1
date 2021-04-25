const blog = {};

blog.init = function() {
   // Add event listener to blog section form
  const blogSubmission = document.querySelector('.blogSubmission');
  blogSubmission.addEventListener('submit', (event) => {
    event.preventDefault();
    app.validateFormInput(app.printComment);
  });
}

blog.init();