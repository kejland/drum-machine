// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
let tock = new Audio("sounds/tock.mp3");
let hit = new Audio("sound/hi-hat.mp3");
let snare = new Audio("sound/snare-drum.mp3");
let kick = new Audio("sound/snare-drum.mp3");

let beatFour = 0;
let counter = document.querySelector("#count");

//checkboxes
let metronome = document.querySelector("#metronome");
let hiHat = document.querySelector("#hi-hat");
let kickDrum = document.querySelector("#kick-drum");
let snareDrum = document.querySelector("#snare-drum");

metronome.checked = true;


// This function is called every 600ms
function update() {

    beatFour++;
    counter.innerText = beatFour;

    if (beatFour%4 === 0){
        tock.play();
    } else {
        // Play the 'tick' sound
        tick.play();
    }

    if (beatFour === 4){
        beatFour = 0;
    }

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
//delays the code by 3secs and won't play sound in the middle
setTimeout(setupUpdate, 300);




