console.log('Welcome to Spotify')
//initialize the variables
let songindex=0;
let audioElement =new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document. getElementById('myprogressbar');
let gif = document. getElementById('gif');
let mastersongname = document. getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs =[
    {songname:"Let me love you",filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    {songname:"Kalakaar",filepath:"songs/2.mp3",coverpath:"cover2.jpg"},
    {songname:"Maan meri jaan",filepath:"songs/3.mp3",coverpath:"cover3.jpg"},
    {songname:"See you again",filepath:"songs/4.mp3",coverpath:"cover4.jpg"},
    {songname:"Rewrite the star",filepath:"songs/5.mp3",coverpath:"cover5.jpg"},
    {songname:"Night changes",filepath:"songs/6.mp3",coverpath:"cover6.jpg"},
    {songname:"Proper patola",filepath:"songs/7.mp3",coverpath:"cover7.jpg"},
    {songname:"Lover",filepath:"songs/8.mp3",coverpath:"cover8.jpg"},

]

songitems.forEach((element,i)=>{

element.getElementsByTagName("img")[0].src = songs[i].coverpath;
element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

})

// audioElement.play();

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
// console.log('timeupdate');
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})

const makeallplays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement .play();
        gif.style.opacity =1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=7){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    audioElement.src=`${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement .play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioElement.src=`${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement .play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})


    

   


    