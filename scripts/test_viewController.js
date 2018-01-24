var currentButton = "a";
var answered = false;

function getQuestionClick() {
    document.getElementById(currentButton + '-div').innerHTML = '<button id="' + currentButton + `-button" class="btn btn-primary" onclick="checkAnswer('` + currentButton + `');">` + currentButton[0].toUpperCase() + `</button><span id="` + currentButton + `">` + document.getElementById(currentButton).innerHTML + `</span>`;

    difficulty = "easy";
    answered = false;
    getOneMCQuestion(difficulty);
}

function displayQuestion(question, answers) {
    $("#question").text(question);
    $("#a").text(answers[0]);
    $("#b").text(answers[1]);
    $("#c").text(answers[2]);
    $("#d").text(answers[3]);
    console.log(difficulty);
}

function checkAnswer(answer) {
    if (!answered) {
        correct = 'a';
        currentButton = answer;
        if (answer == correct) {
            $('#' + answer + '-button').css('backgroundColor','green');
        } else {
            $('#' + answer + '-button').css('backgroundColor','red');
        }
        answered = true;
    }
}
