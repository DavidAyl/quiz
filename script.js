var questionsArray = [
  {
    text: "What is 1 + 1",
    choices: [1, 2, 11, 44],
    answer: "2",
  },
  {
    text: "What is 10/2",
    choices: [5, 6, 17, 42],
    answer: "5",
  },
  {
    text: "How many eggs in a dozen",
    choices: [6, 2, 42, 12],
    answer: "12",
  },
];

var currentIndex = 0;

console.log(questionsArray[1].text);

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
}
function mainSection() {
  mainEl.style.display = "block";
  beginEl.style.display = "none";
  endEl.style.display = "none";

  displayQuestion();
}
function endSection() {
  beginEl.style.display = "none";
  mainEl.style.display = "none";
  endEl.style.display = "block";
}

function sendMessage() {
  timeEl.textContent = "Times Up";
}

function nextQuestion() {
  currentIndex++;
  console.log(currentIndex);

  // reset the container
  mainEl.innerHTML = "";

  displayQuestion();
}

function displayQuestion() {
  // <h3>Questions</h3>
  // <button>2</button>
  // <button>6</button>
  // <button>11</button>
  // <button>44</button>
  var questionh3 = document.createElement("h3");

  questionh3.textContent = questionsArray[currentIndex].text;
  mainEl.append(questionh3);

  // var answer1 = document.createElement("button");
  // answer1.textContent = questionsArray[currentIndex].choices[0];

  // var answer2 = document.createElement("button");
  // answer2.textContent = questionsArray[currentIndex].choices[1];

  // var answer3 = document.createElement("button");
  // answer3.textContent = questionsArray[currentIndex].choices[2];

  // var answer4 = document.createElement("button");
  // answer4.textContent = questionsArray[currentIndex].choices[3];

  for (i = 0; i < questionsArray[currentIndex].choices.length; i++) {
    var answerEl = document.createElement("button");
    answerEl.textContent = questionsArray[currentIndex].choices[i];

    answerEl.addEventListener("click", nextQuestion);

    mainEl.append(answerEl);
  }
}

// setting up button to start game

startBtn.addEventListener("click", mainSection);
startBtn.addEventListener("click", setTime);

// Selects element by class
var timeEl = document.querySelector(".time");

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
      endSection();
    }
  }, 1000);
}
