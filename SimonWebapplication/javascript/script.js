
// declaration and initialisation of an array.
var buttonColours = ["red", "blue", "green", "yellow"];
// array for game patterns
var gamePattern = [];
// array for user click pattern
var userClickedPattern = [];
// setting bolean value false before starting the game
var started = false;
// setting first level as 0
var level = 0;
// setting event listner to whole body
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    // calling next sequence funtion after key press event is trigered
    nextSequence();
    // !true is equal to false than the above statement will not execute again till the user presses the key again.
    started = true;
  }
});
//here we don,t need to use for loop for adding event listner it will automatically add event listner.
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  // this operator it's reffrence to the current object.
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  //  array index start from 0 lenght is equal to 1 , we have to check from level 0 .1-1 = 0,2-1=1,3-1=2
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("h1").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("h1").removeClass("game-over");
    }, 200);
    startOver();
  }
}
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
 
function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern=[];
  started = false;
}
