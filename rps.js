let score = document.getElementById('score')
let pScore = document.getElementById('pScore')
let cScore = document.getElementById('cScore')
let playerScore = 0
let computerScore = 0
let win = document.getElementById('winner')
let roundResults = document.getElementById('results')


function playerPlay(choice){
playRound(choice,computerPlay())
pScore.innerText=(playerScore)
cScore.innerText=(computerScore)
}


function computerPlay(){
let x = Math.floor(Math.random() * 3);
if (x == 0) {
return "rock"
} else if (x == 1) {
return "paper"
} else {
return "scissors"}
}


function playRound(playerSelection, computerSelection){

 if (playerSelection == "rock" && computerSelection == "scissors") {
 playerScore += 1
	 roundResults.innerText = "You win this round. Rock beats Scissors."
	 return gameWinner()
 } 
 else if (playerSelection == "rock" && computerSelection == "paper")
 {computerScore += 1
  roundResults.innerText = "You lose this round. Paper beats Rock."
 return gameWinner()
 }
 else if (playerSelection == "rock" && computerSelection == "rock")
 {
	 return roundResults.innerText = "Draw! Go again."
 }
  else if (playerSelection == "paper" && computerSelection == "scissors")
 {computerScore += 1
roundResults.innerText = "You lose this round. Scissors beats Paper."
 return gameWinner()
 }
  else if (playerSelection == "paper" && computerSelection == "paper")
 {
	 return roundResults.innerText = "Draw! Go again."
 }
  else if (playerSelection == "paper" && computerSelection == "rock")
 {playerScore += 1
  roundResults.innerText = "You win this round. Paper beats Rock."
 return gameWinner()
 }
  else if (playerSelection == "scissors" && computerSelection == "scissors")
 {
	 return roundResults.innerText = "Draw! Go again."
 }
   else if (playerSelection == "scissors" && computerSelection == "paper")
  {playerScore += 1
 roundResults.innerText = "You win this round. Scissors beats Paper."
	return gameWinner()
	}
   else if (playerSelection == "scissors" && computerSelection == "rock")
 {computerScore += 1
 roundResults.innerText = "You lose this round. Scissors beats Rock."
 return gameWinner()
 }
}



function gameWinner(){
	let winner = playerScore > computerScore ? "Player" : "Computer"
	if(playerScore == 5 || computerScore == 5){
		document.getElementById("container").style.visibility = "hidden"
		return win.innerText =`Game Over.  The ${winner} wins`
	}else{
		return score
	}}





