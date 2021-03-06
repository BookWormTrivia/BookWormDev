var base_url = "https://opentdb.com/api.php?"

function getOneMCQuestion(difficulty) {
    base_url += "amount=1&type=multiple";
    base_url += "&difficulty=" + difficulty;
    fetchQuestion(base_url);
}

function getGroupQuestions(name) {
    url = 'http://ec2-18-221-224-2.us-east-2.compute.amazonaws.com:4321/questions/name/';
    url += name + '/';
    console.log(url);
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
    try { data = JSON.parse(data); }
    catch (err) { data = data; }
    var q = data['results'][0];
    console.log(q);
    var incorrect = q['incorrect_answers'];
    incorrect.push(q['correct_answer']);
    displayQuestion(makeString(q['question']), incorrect);
}

function checkForGroup(url) {
    $.ajax({
        url: url,
        success: function(data) {
            exists_callback(data);
        },
        error: function() {
            exists_callback('failed');
        }
    });
}

function exists_callback(data) {
    if(data == 'failed') {
        alert('This group does not exist. \n You can create one below.')
    }
    else if (data == 'No Questions') {
        console.log(data);
        $("#game_screen").show();
        $("#groups_screen").hide();
        $("#question").text("This Group Has No Questions");
        $("#answers").hide();
    }
    else {
        $("#game_screen").show();
        callback(data);
        $("#groups_screen").hide();
    }
}

function makeString(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}
