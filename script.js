<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For My Love ❤️</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>I Love You ❤️</h1>
    <p>Ye website sirf tumhare liye bani hai.</p>

    <button onclick="showMessage()">Click Here ❤️</button>

    <div id="message"></div>
</div>

<script src="script.js"></script>

</body>
</html>body{
    margin:0;
    padding:0;
    background:linear-gradient(to right,#ff758c,#ff7eb3);
    font-family:Arial,sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    color:white;
    text-align:center;
}

.container{
    background:rgba(255,255,255,0.2);
    padding:30px;
    border-radius:20px;
    backdrop-filter:blur(10px);
}

button{
    padding:12px 25px;
    font-size:18px;
    border:none;
    border-radius:10px;
    cursor:pointer;
    background:white;
    color:#ff4d6d;
    font-weight:bold;
}

button:hover{
    transform:scale(1.05);
}

#message{
    margin-top:20px;
    font-size:22px;
}function showMessage(){
    document.getElementById("message").innerHTML =
    "❤️ Tum meri zindagi ki sabse khoobsurat wajah ho. Main hamesha tumse pyaar karta rahunga. ❤️";
}
