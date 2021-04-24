const app = {};

app.validateFormInput = function(callback) {
  const userName = document.getElementById('name').value;
  const userEmail = document.getElementById('email').value;
  const userMessage = document.querySelector('textarea').value;

  if (userName && userEmail && userMessage) {
    callback(userName, userMessage);
  }
}

app.printComment = function(name, comment) {
  const newComment = document.createElement('article');
  newComment.classList.add('commentPost');
  const date = new Date();
  
  newComment.innerHTML = `
  <img src="./assets/blog-image-3.jpg" alt="Barb profile image">
  <div class="textContainer">
    <span class="byline">${date.toDateString()} by ${name}</span>
    <p></p>
  </div>
  `;

  newComment.querySelector('p').innerText = comment;

  console.log(newComment);

  // document.querySelector('.blogSection').appendChild(newComment);

  const blogSection = document.querySelector('.blogSection');
  const form = document.querySelector('form');

  blogSection.insertBefore(newComment, form);

}