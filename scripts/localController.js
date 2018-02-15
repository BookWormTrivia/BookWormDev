var playerID = 2;
var numPlayers = 2;
var playerIDList = [1, 2];
var playerList = [];
var turn = 0;

$(document).ready(function() {
   $("#game_screen").hide();
});

function removePlayerFromList(number) {
	"use strict";
	for (var i = 0; i < playerIDList.length; i++) {
		if (playerIDList[i] == number) {
			playerIDList.splice(i, 1);
			break;
		}
	}
}

function addPlayer() {
	if (numPlayers < 10) {
		playerID++;
		numPlayers++;
		playerIDList.push(playerID);
		newHTML = `
			<div id="player-` + playerID + `-div">
			<input id="player-` + playerID + `-input" class="player-input" placeholder="Player Name">
			<button class="remove-button btn btn-primary" onclick="removePlayer(` + playerID + `);">X</button>
			<br>
			<br>
			</div>`;
		document.getElementById("new-players-div").insertAdjacentHTML("beforeend", newHTML);
		$('.remove-button').css('display','inline');
	}
	if (numPlayers == 10) {
		$('#add-player-div').css('display','none');
	}
}

function removePlayer(num) {
	numPlayers--;
	document.getElementById("player-" + num + "-div").remove();
	removePlayerFromList(num);
	if (numPlayers == 2) {
		$('.remove-button').css('display','none');
	}
	else if (numPlayers == 9) {
		$('#add-player-div').css('display','inline');
	}
}

function clickContinue() {
    "use strict";

	var playerString = "";
	for (var i = 0; i < playerIDList.length; i++) {
		var newName = "Player " + (i + 1);
		var playerInput = document.getElementById("player-" + playerIDList[i] + "-input").value;
		playerInput = playerInput.replace(/\W/g, '');
		if (playerInput != "") {
			if (playerInput.length > 10) {
				var shortName = "";
				for (var j = 0; j < 10; j++) {
					shortName += playerInput[j];
				}
				newName = shortName;
			}
			else {
				newName = playerInput;
			}
		}
		playerList.push(newName);
		playerString += `<div style="float:left;"><b>` + newName + `: </b><b style="margin-right:10px;">0</b></div>`;
	}
    $("#enter_players").hide();
    $("#game_screen").show();
    //$("#players").html(playerString);
	var playerTurn = "Its " + playerList[(turn % numPlayers)] + "'s turn!";
	$("#players").html(playerTurn);
}

var buttonOptions = ["a","b","c","d"];
var answered = false;
var correct = "";

function getQuestionClick() {
	var playerTurn = "Its " + playerList[(turn % numPlayers)] + "'s turn!";
	$("#players").html(playerTurn);
	$("#nextPlayer").hide();
	$("#players").show();
    difficulty = "easy";
    answered = false;
    getOneMCQuestion(difficulty);
    for (i = 0; i < buttonOptions.length; i++) {
        currentButton = buttonOptions[i];
        document.getElementById(currentButton + '-div').innerHTML = '<button id="' + currentButton + `-button" class="btn btn-primary" onclick="checkAnswer('` + currentButton + `');">` + currentButton[0].toUpperCase() + `</button><span id="` + currentButton + `" class="padded-left">` + document.getElementById(currentButton).innerHTML + `</span>`;
    }
    $(".btn-ans").css('background-color', '#007bff')
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
        console.log("hey!");
        if (answer == correct) {
            console.log("correct")
            $('#' + answer + '-button').css('backgroundColor','green');
        } else {
            console.log("incorrect")
            $('#' + answer + '-button').css('backgroundColor','red');
            $('#' + correct + '-button').css('backgroundColor','green');
        }
		turn += 1;
        answered = true;
		$("#nextPlayer").show();
		$("#players").hide()
    }
}
