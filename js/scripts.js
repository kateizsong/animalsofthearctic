const backButtons = document.querySelectorAll('.back-button');
const popups = document.querySelectorAll('.popup');

window.addEventListener('resize', function() {
  alert("Resizing the screen during this experience is not recommended. If needed, resize the screen and then refresh.");
});

window.addEventListener('DOMContentLoaded', function() {
  var backgroundAudio = document.getElementById('backgroundAudio');
  backgroundAudio.volume = 0.2; // Adjust the volume as desired (0 to 1)

  const audioButton = document.getElementById('audio-button');
  audioButton.addEventListener('click', function() {
      if (backgroundAudio.paused) {
          backgroundAudio.play();
          audioButton.textContent = 'Pause Background Audio';
      } else {
          backgroundAudio.pause();
          audioButton.textContent = 'Play Background Audio';
      }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  checkScreenSize();
});

function checkScreenSize() {
  const screenWidth = window.innerWidth;
  const minWidth = 1000; // Adjust the minimum width as needed

  if (screenWidth < minWidth) {
    alert("This website is best experienced on a desktop or tablet");
  } 
}


backButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    popups[index].style.display = 'none';
    const circles = document.querySelectorAll('.map-circle');
        circles.forEach(circle => {
            circle.style.display = 'block';
        });

        const audioElement = popups[index].querySelector('#audio');
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  });
});

function checkScreenSize() {
  const screenWidth = window.innerWidth;
  const minWidth = 768; 

  if (screenWidth < minWidth) {
    alert("For the best experience, visit this page on a desktop!");
  }
}

const audioButtons = document.querySelectorAll('#soundIcon');
const audioElements = document.querySelectorAll('#audio');

audioButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const audio = audioElements[index];
    if (audio.paused) {
      audio.play();
      button.src = "img/pause.png";
    } else {
      audio.pause();
      button.src = "img/audio.png";
    }
  });
});


// Get the actual size of the image
var imgWidth = document.getElementById('background-image').clientWidth;
var imgHeight = document.getElementById('background-image').clientHeight;

// Calculate the scale of the image
var scaleX = imgWidth / 2912; // original width of the image
var scaleY = imgHeight / 1632; // original height of the image

// Get all the map areas
var mapAreas = document.querySelectorAll('map area');

mapAreas.forEach(area => {
  // Get the original coordinates of the area
  var coords = area.getAttribute('coords').split(',');

  // Calculate the new coordinates based on the image scale
  var newX = parseInt(coords[0]) * scaleX;
  var newY = parseInt(coords[1]) * scaleY;
  var newRadius = parseInt(coords[2]) * Math.max(scaleX, scaleY); // scale radius by the larger scale factor

  // Create a new circle
  var circle = document.createElement('div');
  circle.classList.add('map-circle');
  circle.style.left = newX - newRadius + 'px';
  circle.style.top = newY - newRadius + 'px';
  circle.style.width = newRadius * 2 + 'px';
  circle.style.height = newRadius * 2 + 'px';

  // Add the circle to the image's parent element
  document.getElementById('background-image').parentElement.appendChild(circle);
});

mapAreas.forEach(area => {
    // Get the original coordinates of the area
    var coords = area.getAttribute('coords').split(',');

    // Calculate the new coordinates based on the image scale
    var newX = parseInt(coords[0]) * scaleX;
    var newY = parseInt(coords[1]) * scaleY;
    var newRadius = parseInt(coords[2]) * Math.max(scaleX, scaleY); // scale radius by the larger scale factor

    // Create a new circle
    var circle = document.createElement('div');
    circle.classList.add('map-circle');
    circle.style.left = newX - newRadius + 'px';
    circle.style.top = newY - newRadius + 'px';
    circle.style.width = newRadius * 2 + 'px';
    circle.style.height = newRadius * 2 + 'px';

    // Add the circle to the image's parent element
    document.getElementById('background-image').parentElement.appendChild(circle);

    // Add event listener to the circle
    circle.addEventListener('click', function(){
        // Get the animal name from the alt attribute of the area
        var animalName = area.getAttribute('alt').toLowerCase();

        // Get the popup for the animal
        var popup = document.getElementById(animalName);

        // If a popup exists for the animal, display it
        if (popup) {
            popup.style.display = 'flex';
            popup.classList.add('fade-in')
            const circles = document.querySelectorAll('.map-circle');
            circles.forEach(circle => {
                circle.style.display = 'none';
            });
        }
    });
});

// Get the info button and sources popup
const infoButton = document.getElementById('info-button');
const sourcesPopup = document.getElementById('sources');

// Add event listener to the info button
infoButton.addEventListener('click', function() {
    sourcesPopup.style.display = 'flex';
    sourcesPopup.classList.add('fade-in')
    const circles = document.querySelectorAll('.map-circle');
    circles.forEach(circle => {
        circle.style.display = 'none';
    });
});