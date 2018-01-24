var base_url = "https://opentdb.com/api.php?"

function getOneMCQuestion(difficulty) {
    base_url += "amount=1&type=multiple";
    base_url += "&difficulty=" + difficulty;
    fetchQuestion(base_url);
}

function fetchQuestion(url) {
    $.ajax({
        url: url,
        success: function(data) {
            callback(data);
        }
    });
}

function callback(data) {
    var q = data['results'][0];
    var question = q['question'];
    var correct = q['correct_answer'];
    var incorrect = q['incorrect_answers'];
    var answers = incorrect;
    answers.push(correct);
    displayQuestion(question, answers);
}