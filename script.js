let questions = [
  {
    question: "Was versteht ein Tontechniker unter einer DAW?",
    answer_1: "Digital Audio Workstation",
    answer_2: "Dominant Audio Wave",
    answer_3: "Do Audio Worse",
    answer_4: "Dont also work",
    right_answer: 1,
  },
  {
    question: "Welchen Effekt kennt der Tontechniker?",
    answer_1: "Fernwartungseffekt",
    answer_2: "Überwachungseffekt",
    answer_3: "No blame Effekt",
    answer_4: "Nahbesprechungseffekt",
    right_answer: 4,
  },
  {
    question: "Wer ist der mühsamste Musiker im Studio?",
    answer_1: "Gitarrist",
    answer_2: "Sänger",
    answer_3: "Drummer",
    answer_4: "Alle Musiker sind mühsam",
    right_answer: 4,
  },
  {
    question:
      "Wer hat auf Video killed the radio star den Synthesizer gespielt?",
    answer_1: "Michael Jackson",
    answer_2: "Hans Zimmer",
    answer_3: "Freddy Mercury",
    answer_4: "Anne-Sophie Mutter",
    right_answer: 2,
  },
  {
    question: "Wie viele Saiten hat eine Gitarre?",
    answer_1: "1",
    answer_2: "2",
    answer_3: "4",
    answer_4: "6",
    right_answer: 4,
  },
];

let currentQuestion = 0;
let idOfRightAnswer = "answer_" + questions[currentQuestion]["right_answer"];
let points = 0;
let widthProgressBar = 0;

function init() {
  let question = questions[currentQuestion];
  let cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  if (questions.length <= currentQuestion) {
    /*html*/
    cardContainer.innerHTML = `
      <div class="card quizCard">
      <img src="./img/winner.jpg" class="card-img-top" alt="..." />
      <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped bg-success" style="width: ${widthProgressBar}%"></div>
      </div>
      <div class="card-body endCard">
        <div class="titleAndPoints">
          <h5 class="card-title">Quiz beendet</h5>
          <div class="points alignCenter">
            <p>Deine Punktzahl: <br>${points} von ${questions.length}</p>
          </div>
        </div>
        <div><img src="./img/tropy.png" alt=""></div>
      </div>
    </div>
    `;

  } else {
    /*html*/
    cardContainer.innerHTML += `
      <div class="card quizCard">
        <img src="./img/question-mark.jpg" class="card-img-top" alt="..." />
        <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-success" style="width: ${widthProgressBar}%"></div>
        </div>
        <div class="card-body">
          <h5 class="card-title">${question["question"]}</h5>

          <div class="card mb-2 quizAnswerCard" onclick="answer('answer_1')" id="answer_1">
            <div class="card-body">${question["answer_1"]}</div>
          </div>

          <div class="card mb-2 quizAnswerCard" onclick="answer('answer_2')" id="answer_2">
            <div class="card-body">${question["answer_2"]}</div>
          </div>

          <div class="card mb-2 quizAnswerCard" onclick="answer('answer_3')" id="answer_3">
            <div class="card-body">${question["answer_3"]}</div>
          </div>

          <div class="card mb-2 quizAnswerCard" onclick="answer('answer_4')" id="answer_4">
            <div class="card-body">${question["answer_4"]}</div>
          </div>
          <div class="question-footer">
            <div><b>${currentQuestion + 1}</b> von <b>${questions.length}</b> Fragen</div>
            <button type="button" class="btn btn-primary" id="nextQuestion" disabled onclick="nextQuestion()">Nächste Frage</button>
          </div>
        </div>
      </div>
    `;
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  if (question["right_answer"] == selectedQuestionNumber) {
    document.getElementById(selection).classList.add("bg-success");
    countPointsPlusOne();
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).classList.add("bg-success");
  }
  document.getElementById("nextQuestion").disabled = false;
}

function nextQuestion() {
  currentQuestion += 1;
  widthProgressBar = 100 / questions.length * currentQuestion;
  init();
}

function countPointsPlusOne() {
  points += 1;
}
