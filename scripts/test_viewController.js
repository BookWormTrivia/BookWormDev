//var currentButton = "a";
var buttonOptions = ["a","b","c","d"];
var answered = false;
var correct = "";

function getQuestionClick() {
    for (i = 0; i < buttonOptions.length; i++) {
        currentButton = buttonOptions[i];
        document.getElementById(currentButton + '-div').innerHTML = '<button id="' + currentButton + `-button" class="btn btn-primary" onclick="checkAnswer('` + currentButton + `');">` + currentButton[0].toUpperCase() + `</button><span id="` + currentButton + `">` + document.getElementById(currentButton).innerHTML + `</span>`;
    }
    difficulty = "easy";
    answered = false;
    getOneMCQuestion(difficulty);
}

function displayQuestion(question, answers) {
    console.log(answers[3]);
    correct = answers[3];
    for (var i = answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
    }
    for (var i = answers.length - 1; i >= 0; i--) {
        if (correct == answers[i]) {
            console.log(correct);
            console.log(i);
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
        console.log(correct);
    }

    $("#question").text(question);
    $("#a").text(answers[0]);
    $("#b").text(answers[1]);
    $("#c").text(answers[2]);
    $("#d").text(answers[3]);
    console.log(difficulty);
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
