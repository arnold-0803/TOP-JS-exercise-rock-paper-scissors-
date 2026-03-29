function getHumanChoice(){
  let userInput = prompt("Please enter rock, paper or scissors");

  return userInput.toLowerCase();
}

console.log(getHumanChoice());
