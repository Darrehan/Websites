// Java script file for the application
// gererate random number between 1 to 6
var randomeNumber_1 = Math.floor(Math.random() * 6) + 1;
var randomeimage_1 = "images/dice" + randomeNumber_1 + ".png";
// select the image from images/dice1.png to images/dice6.png
var image_1 = document.querySelectorAll("img")[0];
image_1.setAttribute("src", randomeimage_1);
// change the image source
// Generate the random number for second dice
var randomeNumber_2 = Math.floor(Math.random() * 6) + 1;
var randomeimage_2 = "images/dice" + randomeNumber_2 + ".png";
// select the image from images/dice1.png to images/dice6.png
var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src", randomeimage_2);
// change the image source
// change the heading
if (randomeNumber_1 > randomeNumber_2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (randomeNumber_1 < randomeNumber_2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw !";
}
