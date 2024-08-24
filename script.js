console.log("Welcome to spotify");

let songIndex =0;
let audioElement =new Audio("namo1.mp3")
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif =document.getElementById('gif')
let songs = [
    {songname:"namo1",filePath:"namo1.mp3",coverPath:""},
    {songname:"namo2",filePath:"namo2.mp3",coverPath:""},
    {songname:"namo3",filePath:"namo3.mp3",coverPath:""},
    {songname:"namo4",filePath:"namo4.mp3",coverPath:""},
    {songname:"namo5",filePath:"namo5.mp3",coverPath:""},
    {songname:"namo6",filePath:"namo6.mp3",coverPath:""},
    
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener("timeupdate",()=>{
    
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value=progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})