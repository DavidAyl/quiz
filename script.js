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

setTime();
