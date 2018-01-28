var base_url = "https://opentdb.com/api.php?"

function getOneMCQuestion(difficulty) {
    base_url += "amount=1&type=multiple";
    base_url += "&difficulty=" + difficulty;
    fetchQuestion(base_url);
}

function getGroupQuestions(id) {
    url = 'http://ec2-18-221-224-2.us-east-2.compute.amazonaws.com:4321/questions/';
    url += id;
    fetchQuestion(url);
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
    data = JSON.parse(data);
    var q = data['results'][0];
    var incorrect = q['incorrect_answers'];
    incorrect.push(q['correct_answer']);
    displayQuestion(makeString(q['question']), incorrect);
}

function makeString(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}
