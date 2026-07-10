// ===== Romantic Surprise Script =====

const secretName = "nandni";

// Love Letter
const letter = `Dear Baby ❤️

Tum meri zindagi ka sabse khoobsurat hissa ho.

Har din tumhare saath aur bhi special ban jata hai.

Tumhari smile meri sabse badi khushi hai.

Main hamesha tumhara saath nibhaunga.

❤️ Forever Yours ❤️
`;

// Check Name
function checkName() {
    const name = document.getElementById("name").value.trim().toLowerCase();

    if (name === secretName) {
        document.getElementById("nameSection").style.display = "none";
        document.getElementById("welcome").style.display = "block";

        typeLetter();
    } else {
        document.getElementById("error").innerHTML =
            "❌ Baby, sahi naam likho ❤️";
    }
}

// Typing Effect
function typeLetter() {
    let i = 0;
    const typing = document.getElementById("typing");
    typing.innerHTML = "";

    const interval = setInterval(() => {
        typing.innerHTML += letter.charAt(i);
        i++;

        if (i >= letter.length) {
            clearInterval(interval);
        }
    }, 35);
}

// Welcome -> Letter
function showLetter() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("letterPage").style.display = "block";

    document.getElementById("letterText").innerHTML =
        letter.replace(/\n/g, "<br>");
}

// Letter -> Gallery
function showGallery() {
    document.getElementById("letterPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "block";
}

// Gallery -> Timer
function showTimer() {
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("timerPage").style.display = "block";

    startTimer();
}

// Countdown
function startTimer() {

    let count = 5;

    const timer = document.getElementById("countdown");

    if (!timer) {
        return;
    }

    timer.innerHTML = count;

    const interval = setInterval(() => {

        count--;

        timer.innerHTML = count;

        if (count <= 0) {

            clearInterval(interval);

            showProposal();

        }

    }, 1000);

}

// Timer -> Final
function showProposal() {

    document.getElementById("timerPage").style.display = "none";

    document.getElementById("proposalPage").style.display = "block";

}


// ===== Music =====

const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {

    if (bgMusic.paused) {

        bgMusic.play();

        document.getElementById("musicBtn").innerHTML =
            "⏸️ Pause Music";

    } else {

        bgMusic.pause();

        document.getElementById("musicBtn").innerHTML =
            "🎵 Music";

    }

}


// ===== Floating Hearts =====

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "all 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.top = "-100px";
        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}, 1200);
