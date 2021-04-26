const app = {};

app.init = function() {
  // Get elements from DOM and store in variables
  const triptych = document.querySelector('.triptych');
  const overlay = document.querySelector('.imageOverlay');
  const closeButtons = document.querySelectorAll('.closeButton');
  console.log(closeButtons);
  // const image = document.querySelector('.carouselImage');
  
  // Retrieve src and alt attributes of gallery images
  app.getImageInfo();
  
  // Add event listener to gallery images
  triptych.addEventListener('click', (event) => {
    console.log(event.target);
    // Make sure user has clicked an image
    if (event.target.src) {
      // Change image source
      // ! PLACEHOLDER CODE, BUILD EXTRA DIV'S AND FUNCTION TO ASSIGN IMG SRC
      // image.setAttribute('src', event.target.src);
      // image.setAttribute('alt', event.target.alt);
      app.buildCarousel(event.target);
      overlay.classList.toggle('invisible');
    }
  });

  // // Add event listener to close button
  // closeButton.addEventListener('click', () => {
  //   overlay.classList.toggle('invisible');
  // });

  for (let button of closeButtons) {
    button.addEventListener('click', () => {
      console.log('hello');
      overlay.classList.toggle('invisible');
    });
  }

  // Add event listener to carousel image
  // image.addEventListener('click', function() {
  //   const currentIndex = (app.findIndex(this));
  //   changeModalImage(this, currentIndex);
  // });

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

// Functions for image carousel

// Retrieve and store src and alt values from gallery image elements
app.getImageInfo = function() {
  const galleryImages = document.querySelectorAll('.triptych img');
  console.log(galleryImages);
  app.galleryArray = [];

  for (const image of galleryImages) {
    const imageData = {};

    imageData.src = image.src;
    imageData.alt = image.alt;

    app.galleryArray.push(imageData);
  }
}

// Find current image index in galleryArray
app.findIndex = function(image) {
  let index;
  for (let i = 0; i < app.galleryArray.length; i++) {
    if (app.galleryArray[i].src.includes(image.src)) {
      index = i;
    }
  }
  return index;
}

// Change modal image on click
function changeModalImage(element, currentIndex) {
  const nextIndex = currentIndex + 1;
  const calculatedIndex = nextIndex % app.galleryArray.length;
  console.log(calculatedIndex);

  element.src = app.galleryArray[calculatedIndex].src;
}

app.buildCarousel = (image) => {
  let currentIndex = app.findIndex(image);

  const modalOverlay = document.querySelector('.imageOverlay');
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  
  for (let i = 0; i < app.galleryArray.length; i++) {
    const side = document.createElement('div');
    side.classList.add(`side`, `side${i}`, `modalImage`);

    const src = app.galleryArray[currentIndex].src;
    const alt = app.galleryArray[currentIndex].alt;
    
    side.innerHTML = `
    <img src=${src} alt=${alt}>
    <button type="button" class="closeButton" onclick="app.closeModal()"><i class="fas fa-times"></i></button>
    `;

    carousel.appendChild(side);
    currentIndex = (currentIndex + 1) % app.galleryArray.length;
  }
  modalOverlay.appendChild(carousel); 
}

app.closeModal = function() {
  const overlay = document.querySelector('.imageOverlay');
  // Hide overlay
  overlay.classList.toggle('invisible');
  // Remove carousel and all children from overlay
  while (overlay.firstChild) {
    overlay.removeChild(overlay.firstChild);
  }
}

app.init();
