// Get the computer choice

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

console.log(getComputerChoice());
