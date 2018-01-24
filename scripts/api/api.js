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
    question = data['results'][0];
    displayQuestion(question);
}