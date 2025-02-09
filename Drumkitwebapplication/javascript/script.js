//adding EventListner for Button.
for (var i = 0; i <= 6; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}
function handleclick() {
  // this operator as we know its refrence to the current object
  var buttonContent = this.innerHTML;
  makeSound(buttonContent);
  buttonAnimation(buttonContent);
}
//adding EventListner for keyboard.
//adding EventListner to all document.
// keypress is depricated try to use keydown if you have already visited my code @rehan
document.addEventListener("keypress", handlekeyboard);
// here it use the concept of callback machanism
function handlekeyboard(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}
function makeSound(key) {
  switch (key) {
    case "w":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "a":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;
    case "s":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;
    case "d":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
}
// Animation for button's to provide animation
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  // time delay inbuilt method used in javascript
  // used Anonymous funtion here
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000);
  // delay of 1000milli seconds
}
