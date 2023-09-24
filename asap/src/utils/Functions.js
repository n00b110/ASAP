import React from 'react';

// Import the Howler library
const { Howl, Howler } = require('howler');

Howler.autoUnlock = true; // Disable automatic unlocking for audio on some mobile devices

// Define a function to play the sound
function playSound() {
  // Create a new sound
  const sound = new Howl({
    src: ['path/to/your/audio/file.mp3'], // Replace with the path to your audio file
    volume: 1.0, // Adjust the volume (0.0 to 1.0)
  });

  // Play the sound
  sound.play();
}

// Assuming you have an HTML button element with an id "playButton"
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function () {
  playSound();
});

