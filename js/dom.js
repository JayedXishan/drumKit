window.addEventListener('keydown',playsound)

function playsound(e){
    console.log(e);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio) return; //audio na pele return kore dibo
    audio.currentTime=0; //jate 1st theke sound start hoy
    audio.play();
}