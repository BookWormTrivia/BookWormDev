var playerID = 2;
var numPlayers = 2;
var playerList = [1, 2];

function removePlayerFromList(number) {
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
		if (playerInput != "") {
			newName = playerInput;
		}
		playerString += `<b>` + newName + `: </b><b style="margin-right:10px;">0</b>`;
	}
    
    document.getElementById("local-content").innerHTML = `
        <div class="jumbotron">
            <h1>BookWorm Trivia</h1>
        </div>
        
        <div class="container" style="font-size:20px;">`
        + playerString + 
        `</div>
        <br>

        <div class="container">
            <button class="btn btn-primary" onclick="getQuestionClick();">Get Questions</button>
        </div>
        <br/>
        <div class="container">
            <h2 id="question">Question</h2>
            <br/>
            <div class="container">
                <button class="btn btn-primary">A</button><span id="a"> Answer A</span>
            </div>
            <br/>
            <div class="container">
                <button class="btn btn-primary">B</button><span id="b"> Answer B</span>
            </div>
            <br/>
            <div class="container">
                <button class="btn btn-primary">C</button><span id="c"> Answer C</span>
            </div>
            <br/>
            <div class="container">
                <button class="btn btn-primary">D</button><span id="d"> Answer D</span>
            </div>
            <br/>
        </div>`;
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