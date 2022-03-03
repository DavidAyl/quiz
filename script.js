var timerInterval;

var questionsArray = [
  {
    text: "What is 1 + 1",
    choices: ["1", "2", "11", "44"],
    correct: "2",
  },
  {
    text: "What is 10/2",
    choices: ["5", "6", "17", "42"],
    correct: "5",
  },
  {
    text: "How many eggs in a dozen",
    choices: ["6", "2", "42", "12"],
    correct: "12",
  },
];

var currentIndex = 0;

// setting variables for the quiz
var rightOrWrong = document.querySelector("#right-or-wrong");
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

function handleInitialSubmit(event) {
  event.preventDefault();

  var stored = JSON.parse(localStorage.getItem("highScores")) || [];
  var updatedScores = stored.concat({
    score: score,
    initials: initialsInput.value,
  });

  localStorage.setItem("highScores", JSON.stringify(updatedScores));
}

function init() {
  startScreen();
}

function checkAnswer(answer) {
  console.log(answer + " vs. " + questionsArray[currentIndex].correct);
  if (answer == questionsArray[currentIndex].correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
    secondsLeft -= 10;
  }
}

function nextQuestion(event) {
  checkAnswer(event.target.textContent);
  currentIndex++;

  // reset the container
  mainEl.innerHTML = "";
  if (currentIndex < questionsArray.length) {
    displayQuestion();
  } else {
    clearInterval(timerInterval);
    endSection();
  }
}

function displayQuestion() {
  var questionh3 = document.createElement("h3");

  questionh3.textContent = questionsArray[currentIndex].text;
  mainEl.append(questionh3);

  // node.dataset.value = key;

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
  timerInterval = setInterval(function () {
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

// need to check if correct answer of current question matches current question clicked
