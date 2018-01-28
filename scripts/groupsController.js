function getGroupQuestionClick() {
    var group = "1";
    getGroupQuestions(group);
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
    console.log(group_name);
    if(groupExists(group_name)) {
        $("#groups_screen").hide();
        $("#group_name").append(group_name);
        $("#game_screen").fadeIn();
    }
}

function groupExists() {
    return true;
}