//var currentButton = "a";
var buttonOptions = ["a","b","c","d"];
var answered = false;
var correct = "";

function getQuestionClick() {
	difficulty = "easy";
    answered = false;
    getOneMCQuestion(difficulty);
    for (i = 0; i < buttonOptions.length; i++) {
        currentButton = buttonOptions[i];
        document.getElementById(currentButton + '-div').innerHTML = '<button id="' + currentButton + `-button" class="btn btn-primary" onclick="checkAnswer('` + currentButton + `');">` + currentButton[0].toUpperCase() + `</button><span id="` + currentButton + `">` + document.getElementById(currentButton).innerHTML + `</span>`;
    }
}

function displayQuestion(question, answers) {
    correct = answers[3];
    for (var i = answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
    }
    for (var i = answers.length - 1; i >= 0; i--) {
        if (correct == answers[i]) {
            if (i==1) {
                correct = 'b';
            } else if (i==2) {
                correct = 'c';
            } else if (i==3) {
                correct = 'd';
            } else {
                correct = 'a';
            }
        }
    }

    $("#question").text(question);
    $("#a").text(makeString(answers[0]));
    $("#b").text(makeString(answers[1]));
    $("#c").text(makeString(answers[2]));
    $("#d").text(makeString(answers[3]));
}

function checkAnswer(answer) {
    if (!answered) {
        // currentButton = answer;
        // currentButton = correct;
        if (answer == correct) {
            $('#' + answer + '-button').css('backgroundColor','green');
        } else {
            $('#' + answer + '-button').css('backgroundColor','red');
            $('#' + correct + '-button').css('backgroundColor','green');
        }
        answered = true;
    }
}
