let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  if(humanChoice === computerChoice){
    console.log("Tie, No winner");
  }else if(
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock"
  ){
    console.log("You Win! " + humanChoice + " beat " + computerChoice);
    humanScore++;
  }else{
    console.log("You Lose " + computerChoice + " beat " + humanChoice);
    computerScore++;
  }
}

playRound("Rock", "scissors");