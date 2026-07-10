// ===== Romantic Surprise Script - Part 1 =====

function checkName() {
    let name = document.getElementById("name").value.trim().toLowerCase();

    if (name === "nandni") {
        document.getElementById("nameSection").style.display = "none";
        document.getElementById("timerPage").style.display = "block";
        startTimer();
    } else {
        document.getElementById("error").innerHTML =
            "❌ Sirf Nandni apna surprise open kar sakti hai ❤️";
    }
}

function startTimer() {

    let count = 5;

    document.getElementById("countdown").innerHTML = count;

    let timer = setInterval(function () {

        count--;

        document.getElementById("countdown").innerHTML = count;

        if (count <= 0) {

            clearInterval(timer);

            showProposal();

        }

    }, 1000);

}

function showProposal() {

    document.getElementById("timerPage").style.display = "none";

    document.getElementById("proposalPage").style.display = "block";

    document.getElementById("proposalPage").classList.add("show");

}
// ===== Romantic Surprise Script - Part 2 =====

const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        document.getElementById("musicBtn").innerHTML = "⏸️ Pause Music";
    } else {
        bgMusic.pause();
        document.getElementById("musicBtn").innerHTML = "🎵 Play Music";
    }
}

// Floating Hearts
setInterval(function () {

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 5s linear";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.style.top = "-100px";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(function () {
        heart.remove();
    }, 5000);

}, 1200);
