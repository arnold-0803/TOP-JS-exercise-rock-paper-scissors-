function getComputerChoice(){
  let randomChoice = Math.floor(Math.random() * 3);

  if(randomChoice === 0){
    return "rock";
  }else if(randomChoice === 1){
    return "paper";
  }else{
    return "scissors";
  }
}


// function getHumanChoice(){
//   let userInput = prompt("Please enter rock, paper or scissors");
//   if(userInput === null) return "rock";

//   return userInput.toLowerCase();
// }

let humanScore = 0;
let computerScore = 0;

// function playGame(){
  

//   function playRound(humanChoice, computerChoice){
//     humanChoice = humanChoice.toLowerCase();

//     if(humanChoice === computerChoice){
//       console.log("Tie, No winner");
//     }else if(
//       humanChoice === "rock" && computerChoice === "scissors" ||
//       humanChoice === "scissors" && computerChoice === "paper" ||
//       humanChoice === "paper" && computerChoice === "rock"
//     ){
//       console.log("You Win! " + humanChoice + " beat " + computerChoice);
//       humanScore++;
//     }else{
//       console.log("You Lose " + computerChoice + " beat " + humanChoice);
//       computerScore++;
//     }
//   }

//   for(let i = 0; i < 5; i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }

//   if(humanScore > computerScore){
//     console.log("You Won! The game");
//   }else if(computerScore > humanScore){
//     console.log("Computer Won! The game");
//   }else{
//     console.log("It's a Tie!");
//   }
// }

// playGame();


function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  if(humanScore === 5 || computerScore === 5){
    return;
  }

  if(humanChoice === computerChoice){
    console.log("Tie, No winner");
    document.getElementById("results").textContent = "Tie, No winner";
  }else if(
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock"
  ){
    console.log("You Win! " + humanChoice + " beat " + computerChoice);
    humanScore++;
    document.getElementById("results").textContent = "You won!";
  }else{
    console.log("You Lose " + computerChoice + " beat " + humanChoice);
    computerScore++;
    document.getElementById("results").textContent = "You Lost!";
  }

  document.getElementById("score").textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    document.getElementById("results").textContent = "Human Is The Winner!";
  }else if(computerScore === 5){ 
    document.getElementById("results").textContent = "Computer Is The Winner!";
  }
}


document.getElementById("rock").addEventListener("click", ( )=>{
  playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", ( )=>{
  playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", ( )=>{
  playRound("scissors", getComputerChoice());
});
