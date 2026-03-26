function getHumanChoice(){
  let userInput = prompt("Please enter rock, paper or scissors");

  return userInput.toLocaleLowerCase();
}

console.log(getHumanChoice());
