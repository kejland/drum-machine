// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
let tock = new Audio("sounds/tock.mp3");
let hit = new Audio("sounds/hi-hat.mp3");
let snare = new Audio("sounds/snare-drum.mp3");
let kick = new Audio("sounds/kick-drum.mp3");

let beatFour = 0;
let counter = document.querySelector("#count");

//checkboxes
let metronome = document.querySelector("#metronome");
let hiHat = document.querySelector("#hi-hat");
let kickDrum = document.querySelector("#kick-drum");
let snareDrum = document.querySelector("#snare-drum");

metronome.checked = true;

//let count = 0;
// This function is called every 600ms
function update() {

    beatFour++;
    counter.innerText = beatFour;

    if (hiHat.checked === true){
        if (beatFour === 1 || beatFour === 2 || beatFour === 3 || beatFour === 4){
            hit.play();
        }
    }

    if (snareDrum.checked === true){
        if (beatFour === 1 || beatFour === 2 || beatFour === 3 || beatFour === 4){
            snare.play();
        }
    }

    if (kickDrum.checked === true){
        if (beatFour === 1 || beatFour === 2 || beatFour === 3 || beatFour === 4){
            kick.play();
        }
    }

    if (metronome.checked === true){

        if (beatFour%4 === 0){
            tock.play();
        } else {
            // Play the 'tick' sound
            tick.play();
        }
    
        if (beatFour === 4){
            beatFour = 0;
        }
    } else if (metronome.checked === false){
        if (beatFour === 4){
            beatFour = 0;
        }
    }

    // count++;
    // let metronomeCount = (count % 4) + 1;



    // if (hiHat.checked === true){

    //     let timingInput = document.querySelector("#hi-hat");

    //     if (Number(timingInput.value) === metronomeCount){
    //         hit.play();
    //     }

    //     // if ()
        
    // }

    // if (kickDrum.checked){
    //     if (counter === beatFour){
    //         kick.play();
    //     }
    // }


}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
//delays the code by 3secs and won't play sound in the middle
setTimeout(setupUpdate, 300);




