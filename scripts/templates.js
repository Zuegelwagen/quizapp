function createHTMLEndCard(question) {
    /*html*/
    return `
        <div class="card quizCard">
            <img src="./img/winner.jpg" class="card-img-top" alt="..." />
            <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped bg-success" style="width: ${widthProgressBar}%"></div>
            </div>
            <div class="card-body endCard">
                <div class="titleAndPoints">
                    <h5 class="card-title">Quiz beendet</h5>
                    <div class="points alignCenter column">
                        <p>Deine Punktzahl: <br>${points} von ${questions.length}</p>
                        <button type="button" class="btn btn-primary resetGame" onclick="resetGame()">Spiel dasselbe Quiz nochmal!</button>
                    </div>
                </div>
                <div><img class="trophy" src="./img/tropy.png" alt=""></div>
            </div>
        </div>
    `;
}

function createHTMLQuizCard(question) {
    /*html*/
    return `
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