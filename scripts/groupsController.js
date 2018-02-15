var answered;
function getGroupQuestionClick() {
    var group = $("#play_group_name").val();
    getGroupQuestions(group);
    answered = false;
    resetButtonColors();
}

function resetButtonColors() {
    $(".btn-ans").css('background-color', '#007bff');
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
}

function toggleCreateGroup() {
    $("#play_with_group").toggle();
    $("#create_group").fadeToggle();
}

function playGroupClick() {
    var group_name = $("#play_group_name").val();
    var url = "http://ec2-18-221-224-2.us-east-2.compute.amazonaws.com:4321/questions/name/" + group_name + '/'
    checkForGroup(url);
    $("#group_name").text(group_name);
}

function groupExists() {
    return true;
}

function createQuestionClick() {
    let group_name = $("#group_name").text();
    $("#game_screen").hide();
    $("#create_question").fadeIn();
    $("#group_to_add").val(group_name);    
}

function hideCreateQuestion() {
    $("#create_question").hide();
    $("#game_screen").fadeIn();
}

function checkAnswer(answer) {
    if (!answered) {
        if (answer == correct) {
            $('#' + answer + '-button').css('backgroundColor','green');
        } else {
            $('#' + answer + '-button').css('backgroundColor','red');
            $('#' + correct + '-button').css('backgroundColor','green');
        }
        answered = true;
    }
}