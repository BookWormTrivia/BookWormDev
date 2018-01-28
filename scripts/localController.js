var playerID = 2;
var numPlayers = 2;
var playerList = [1, 2];

$(document).ready(function() {
   $("#game_screen").hide(); 
   $("#leaderboard").hide();
});

function removePlayerFromList(number) {
	"use strict";
	for (var i = 0; i < playerList.length; i++) {
		if (playerList[i] == number) {
			playerList.splice(i, 1);
			break;
		}
	}
}

function addPlayer() {
	if (numPlayers < 10) {
		playerID++;
		numPlayers++;
		playerList.push(playerID);
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
	for (var i = 0; i < playerList.length; i++) {
		var newName = "Player " + (i + 1);
		var playerInput = document.getElementById("player-" + playerList[i] + "-input").value;
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
		playerString += `<div style="float:left;"><b>` + newName + `: </b><b style="margin-right:10px;">0</b></div>`;
	} 
    $("#enter_players").hide();
    $("#game_screen").show();
    $("#leaderboard").show();
    $("#players").html(playerString);

    initLeaderboard();
}

var buttonOptions = ["a","b","c","d"];
var answered = false;
var correct = "";

function getQuestionClick() {
    difficulty = "easy";
    answered = false;
    getOneMCQuestion(difficulty);
    for (i = 0; i < buttonOptions.length; i++) {
        currentButton = buttonOptions[i];
        document.getElementById(currentButton + '-div').innerHTML = '<button id="' + currentButton + `-button" class="btn btn-primary" onclick="checkAnswer('` + currentButton + `');">` + currentButton[0].toUpperCase() + `</button><span id="` + currentButton + `">` + document.getElementById(currentButton).innerHTML + `</span>`;
    }
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

function initLeaderboard() {
	document.getElementById("0").value += playerList[0];
	document.getElementById("1").value += playerList[0];

	var scores = document.getElementById("scores");
	if (playerList.length > 2) {
		for (var i = 2; i < playerList.length; i++) {
			scores.innerHTML += `<p id="${i}">${i}. ${scoresList[i]}</p>\n<br/>`
		}
	}
}

function updateLeaderboard() {
	var orderedScores = jQuery.extend(true, {}, scoresList).sort(); // Deep Copy

	for (var i = 0; i < scoresList.length; i++) {
		document.getElementById(i).value = `${i+1}. ${scoresDict[scoresList[i]]}\t${orderedScores[i]}`
	}
}