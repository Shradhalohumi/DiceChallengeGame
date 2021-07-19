var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + diceImage;

var imgg1 = document.querySelectorAll("img")[0];
imgg1.setAttribute('src', imageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + diceImage2;
var imgg2 = document.querySelectorAll("img")[1];
imgg2.setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1").innerHTML = " 🚩 PLAYER 1 WINS!";
}
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS! 🚩";
}