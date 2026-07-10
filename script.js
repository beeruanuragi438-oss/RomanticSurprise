function checkName(){

let name=document.getElementById("name").value.trim().toLowerCase();

if(name!="nandni"){

document.getElementById("error").innerHTML=
"❤️ Ye surprise sirf meri Baby ke liye hai ❤️";

return;

}

document.getElementById("nameSection").style.display="none";

document.getElementById("welcome").style.display="flex";

document.getElementById("welcome").classList.add("fadeIn");

typeWriter();

startHearts();

}

let text=
`Baby ❤️

Jab se tum meri life me aayi ho,
meri duniya aur bhi khoobsurat ho gayi hai.

Har din tumhari smile dekhkar lagta hai
ki mujhe meri duniya mil gayi.

Ye surprise sirf tumhare liye hai. ❤️`;

let i=0;

function typeWriter(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

function startHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},300);

}function showLetter(){

document.getElementById("welcome").style.display="none";

document.getElementById("letterPage").style.display="flex";

document.getElementById("letterPage").classList.add("fadeIn");

document.getElementById("letterText").innerHTML=`

💌 Meri Pyari Baby ❤️

Tum meri zindagi ka sabse khoobsurat hissa ho.

Tumhari hasi meri duniya roshan kar deti hai.

Main har din bas yehi dua karta hu ki hum hamesha saath rahein.

Chahe waqt badle, halaat badle,
lekin mera pyaar kabhi nahi badlega.

❤️ Forever Yours ❤️

<b>Betu</b>

`;

}

function showGallery(){

document.getElementById("letterPage").style.display="none";

document.getElementById("galleryPage").style.display="flex";

document.getElementById("galleryPage").classList.add("fadeIn");

}

function showTimer(){

document.getElementById("galleryPage").style.display="none";

document.getElementById("timerPage").style.display="flex";

document.getElementById("timerPage").classList.add("fadeIn");

startTimer();

}

function startTimer(){

let startDate=new Date("2025-01-01");

setInterval(()=>{

let now=new Date();

let diff=now-startDate;

let days=Math.floor(diff/1000/60/60/24);

let hours=Math.floor((diff/1000/60/60)%24);

let minutes=Math.floor((diff/1000/60)%60);

document.getElementById("loveTimer").innerHTML=

days+" Days ❤️ "+hours+" Hours ❤️ "+minutes+" Minutes";

},1000);

}

function showProposal(){

document.getElementById("timerPage").style.display="none";

document.getElementById("proposalPage").style.display="flex";

document.getElementById("proposalPage").classList.add("fadeIn");

}
const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        document.getElementById("musicBtn").innerHTML = "⏸️ Pause";
    } else {
        bgMusic.pause();
        document.getElementById("musicBtn").innerHTML = "🎵 Music";
    }
}
