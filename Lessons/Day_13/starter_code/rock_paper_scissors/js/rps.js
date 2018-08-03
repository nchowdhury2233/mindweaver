var humanScore = 0;
var botScore = 0;
// store human score
// store computer score
function getComputerPlay() {
	var choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random()*3)];
}

function pickWinner(playerChoice, botChoice) {
	if(playerChoice === botChoice) {
		console.log("Tied");
	} else if (
		playerChoice === "paper" && botChoice === "rock" || 
		playerChoice === "rock" && botChoice === "scissors" || 
		playerChoice === "scissors" && botChoice==="paper") {
		console.log("You Won!"); 
		humanScore += 1;
	} else {
		console.log("You Lost!");
		botScore += 1;
	}
		console.log("Player:", playerChoice, 
			"\nBot:", botChoice,
			"\nScore:", humanScore, " to ", botScore);
}

 pickWinner("scissors", getComputerPlay());
 