function getQuestionClick() {
    difficulty = "easy";
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