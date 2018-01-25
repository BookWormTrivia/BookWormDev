var playerID = 2;
var numPlayers = 2;
var playerList = [1, 2];

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
			<input id="player-` + playerID + `-input" style="height:30px; width:280px; font-size:16px; padding:5px; border:2px solid #0C60FE" placeholder="Player Name">
			<button class="remove-button" style="width:30px; color:red; padding-bottom:1px;" onclick="removePlayer(` + playerID + `);">X</button> 
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
					shortName += playerInput[i];
				}
				newName = shortName;
			}
			else {
				newName = playerInput;
			}
		}
		playerString += `<div style="float:left;"><b>` + newName + `: </b><b style="margin-right:10px;">0</b></div>`;
	}
    
    document.getElementById("local-content").innerHTML = `
        <div class="jumbotron">
            <h1 style="white-space:nowrap;"><img style="width:60px; height:60px; margin-right:10px;" src="res/images/bookworm.png" onclick="window.location='index.html'"/>BookWorm Trivia</h1>
        </div>
        
		<div style="margin-left:80px;">
			<div style="display:inline-block; font-size:20px;">`
			+ playerString + 
			`</div>
			<br>
			<br>

			<button class="btn btn-primary" onclick="getQuestionClick();">Get Questions</button>
			<br/>
			<br/>
			<h2 id="question">Question</h2>
			<br/>
			<div style="margin-left:20px;">
				<button class="btn btn-primary">A</button><span id="a"> Answer A</span>
				<br/>
				<br/>
				<button class="btn btn-primary">B</button><span id="b"> Answer B</span>
				<br/>
				<br/>
				<button class="btn btn-primary">C</button><span id="c"> Answer C</span>
				<br/>
				<br/>
				<button class="btn btn-primary">D</button><span id="d"> Answer D</span>
				<br/>
				<br/>
			</div>
		</div>;`
}

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