// setting variables for the quiz

var beginEl = document.querySelector("#start");
var mainEl = document.querySelector("#main");
var endEl = document.querySelector("#end");

var startBtn = document.querySelector("#startbtn");
var initialsInput = document.querySelector("#initials");

// setting functions for different sections of the quiz

function beginSection() {
  beginEl.style.display = "block";
  mainEl.style.display = "none";
  endEl.style.display = "none";
  setTime.style.display = "none";
}
function mainSection() {
  beginEl.style.display = "none";
  mainEl.style.display = "block";
  endEl.style.display = "none";
  setTime.style.display = "block";
}
function endSection() {
  beginEl.style.display = "none";
  mainEl.style.display = "none";
  endEl.style.display = "block";
  setTime.style.display = "none";
}

// setting up button to start game

startBtn.addEventListener("click", mainSection);
startBtn.addEventListener("click", setTime);

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("timer");

var secondsLeft = 60;

timeEl.textContent = secondsLeft;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to send times up message
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Times up";
}
