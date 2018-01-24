function getQuestionClick() {
    difficulty = "easy";
    getOneMCQuestion(difficulty);
}

function displayQuestion(q) {
    question = q['question'];
    $("#question").text(question);
    $("#a").text(q['correct_answer']);
    $("#b").text(q['incorrect_answers'][0]);
    $("#c").text(q['incorrect_answers'][1]);
    $("#d").text(q['incorrect_answers'][2]);
}