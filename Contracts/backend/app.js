const { Howl, Howler } = require('howler');


Howler.autoUnlock = false;

const sound = new Howl({
	src: ["test.mp4"],
	volume: 0.8 // Volume works on a scale of 0.0. to 1.0
});


sound.play();
