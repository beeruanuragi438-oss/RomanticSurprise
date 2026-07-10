function startLove(){

    let name = document.getElementById("name").value.trim().toLowerCase();

    if(name !== "baby"){
        document.getElementById("error").innerHTML =
        "❤️ Ye surprise sirf meri Baby ke liye hai ❤️";
        return;
    }

    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";

    typeWriter();
    hearts();
}

let msg="Baby ❤️\n\nJab se tum meri life me aayi ho, meri duniya aur bhi khoobsurat ho gayi hai. Tum meri smile ki wajah ho. Main hamesha tumse pyaar karta rahunga. ❤️";

let i=0;

function typeWriter(){

    if(i<msg.length){

        document.getElementById("typing").innerHTML += msg.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

function hearts(){

    setInterval(function(){

        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },6000);

    },300);

}

function nextPage(){

    document.getElementById("page2").style.display="none";

    document.getElementById("page3").style.display="block";

    document.getElementById("letter").innerHTML=

    `💌<br><br>

    Meri Pyari Baby ❤️<br><br>

    Tum meri zindagi ka sabse khoobsurat hissa ho.

    Tumhari har smile meri duniya roshan kar deti hai.

    Main chahta hu ki hum hamesha saath rahein.

    Har din tumhare saath ek nayi khushi lekar aaye.

    <br><br>

    ❤️ Forever Yours ❤️

    <br><br>

    Betu`;

}

function nextFinal(){

    document.getElementById("page3").style.display="none";

    document.getElementById("page4").style.display="block";

}
