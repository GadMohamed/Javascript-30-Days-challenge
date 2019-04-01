






function playAudio(e) {
    
    //use ES6 New Feature Template String 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    audio.currentTime = 0; //start audio from start every keydown
    audio.play();
    
    key.classList.add('playing');
    
}

function stopanmiatin(e){

    if(e.propertyName !== "transform") return;
    this.classList.remove('playing');
    
}
const keys = document.querySelectorAll('.key');

window.addEventListener("keydown",playAudio);

keys.forEach( key => {
    key.addEventListener('transitionend',stopanmiatin);
})

