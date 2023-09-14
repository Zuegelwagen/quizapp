let currentQuestion = 0;
let points = 0;
let widthProgressBar = 0;
let audioRight = new Audio("sounds/right.mp3");
let audioWrong = new Audio("sounds/wrong.mp3");
let audioApplauseMini = new Audio("sounds/applause_mini.mp3");
let audioApplauseMidi = new Audio("sounds/applause_midi.mp3");
let audioApplauseMaxi = new Audio("sounds/applause_maxi.mp3");

function init() {
  let question = questions[currentQuestion];
  let cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  if (quizIsFinished()) {
    cardContainer.innerHTML = createHTMLEndCard(question);
    playApplause();
  } else {
    cardContainer.innerHTML += createHTMLQuizCard(question);
  }
}

function quizIsFinished() {
  return questions.length <= currentQuestion;
}

function playApplause() {
  if (points == 0) {
    audioApplauseMini.play();
  }
  if (points > 0 && points < 5) {
    audioApplauseMidi.play();
  }
  if (points == 5) {
    audioApplauseMaxi.play();
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = "answer_" + questions[currentQuestion]["right_answer"];

  if (answerIsCorrect(question, selectedQuestionNumber)) {
    changeButtonToSuccess(selection);
    audioRight.play();
    countPointsPlusOne();
  } else {
    changeButtonToDanger(selection);
    showCorrectAnswer(idOfRightAnswer);
    audioWrong.play();
  }
  enableButtonNextQuestion();
  disableAllAnswerButtons();
}

function answerIsCorrect(question, selectedQuestionNumber) {
  return question["right_answer"] == selectedQuestionNumber;
}

function changeButtonToSuccess(selection) {
  document.getElementById(selection).classList.add("bg-success");
}

function changeButtonToDanger(selection) {
  document.getElementById(selection).classList.add("bg-danger");
}

function showCorrectAnswer(idOfRightAnswer) {
  document.getElementById(idOfRightAnswer).classList.add("bg-success");
}

function disableAllAnswerButtons() {
  for (let i = 1; i < 5; i++) {
    document.getElementById(`answer_${i}`).onclick = null;
    document.getElementById(`answer_${i}`).style.cursor = "default";
  }
}

function enableButtonNextQuestion() {
  document.getElementById("nextQuestion").disabled = false;
}

function nextQuestion() {
  currentQuestion += 1;
  widthProgressBar = (100 / questions.length) * currentQuestion;
  init();
}

function countPointsPlusOne() {
  points += 1;
}

function resetGame() {
  currentQuestion = 0;
  points = 0;
  widthProgressBar = 0;
  stopAllAudios();
  init();
}

function stopAllAudios() {
  audioApplauseMaxi.pause();
  audioApplauseMaxi.currentTime = 0;
  audioApplauseMidi.pause();
  audioApplauseMidi.currentTime = 0;
  audioApplauseMini.pause();
  audioApplauseMini.currentTime = 0;
}
