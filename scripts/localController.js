var numPlayers = 2;

function addPlayer() {
	numPlayers++;
	document.getElementById("add-player-div").innerHTML += `
    	<input id="player-` + numPlayers + `-input" style="height:30px; width:280px; font-size:16px; padding:5px; border:2px solid #0C60FE" placeholder="Player ` + numPlayers + `">
		<br>
		<br>`;
}

function removePlayer(num) {
	
}

function clickContinue() {
    "use strict";
    var playerOne = "Player 1";
    var playerTwo = "Player 2";
    
    var playerOneInput = document.getElementById("player-1-input").value;
    var playerTwoInput = document.getElementById("player-2-input").value;
    
    if (playerOneInput != "") {
        playerOne = playerOneInput;
    }
    if (playerTwoInput != "") {
        playerTwo = playerTwoInput;
    }
    
    document.getElementById("local-content").innerHTML = `
        <div class="jumbotron">
            <h1>BookWorm Trivia</h1>
        </div>
        
        <div class="container" style="font-size:20px;">
            <b>` + playerOne + `:</b>
            <b style="margin-right:10px;">0</b>
            <b>` + playerTwo+ `:</b>
            <b>0</b>
        </div>
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