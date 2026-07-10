function checkName(){

    let name = document.getElementById("name").value.trim().toLowerCase();

    if(name === "baby"){

        document.getElementById("result").innerHTML = `
        <h2>💖 I Love You Baby 💖</h2>

        <p>
        Baby ❤️<br><br>

        Jab se tum meri life me aayi ho,
        meri duniya aur bhi khoobsurat ho gayi hai. 🌹<br><br>

        Tumhari smile meri sabse badi khushi hai. 😊<br><br>

        Main promise karta hu ki hamesha tumhara saath dunga,
        har khushi aur har mushkil me. ❤️<br><br>

        <h3>Forever Yours ❤️<br>Betu</h3>
        `;
    }
    else{

        document.getElementById("result").innerHTML =
        "💝 Ye surprise sirf meri Baby ke liye hai. ❤️";
    }

}
