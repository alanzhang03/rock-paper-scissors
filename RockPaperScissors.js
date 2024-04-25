//0 = rock
//1 = paper
//2 = scissors (for computer)
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compChoice = Number(Math.floor(Math.random() * 3));
    console.log(compChoice);
        if(compChoice ===  0){
            console.log("Computer picked rock");
        }
        else if(compChoice === 1){
            console.log("Computer picked paper");
        }
        else{
            console.log("Computer picked scissors");
        }

}

function getHumanChoice(){
    let humChoice = prompt("Rock, Paper, or Scissors?");
    let numValue;

    if(humChoice === "Rock"){
        numValue = 0;
        console.log("You have choosen rock");
    }
    else if(humChoice === "Paper"){
        numValue = 1;
        console.log("You have choosen paper");

    }
    else if(humChoice === "Scissors"){
        numValue = 2;
        console.log("You have choosen scissors");
    }
    else{
        console.log("Please input valid choice!");
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if(humanChoice === 0 && computerChoice === 0){
        console.log("Tie! Play again!");
    }
    else if(humanChoice === 0 && computerChoice === 1){
        console.log("You Lose, computer wins!");
    }
    else if(humanChoice === 0 && computerChoice === 2){
        console.log("You win! Computer loses!");
    }
    else if(humanChoice === 1 && computerChoice === 1){
        console.log("Tie! Play again!");
    }
    else if(humanChoice === 1 && computerChoice === 0){
        console.log("You win! Computer loses!");
    }
    else if(humanChoice === 1 && computerChoice === 2){
        console.log("You Lose, computer wins!");
    }
    else if(humanChoice === 2 && computerChoice === 2){
        console.log("Tie! Play again!");
    }
    else if(humanChoice === 2 && computerChoice === 0){
        console.log("You lose, computer wins!");
    }
    else if(humanChoice === 2 && computerChoice === 1){
        console.log("You win! Computer loses");
    }
    else{
        console.log("Error, something went wrong");
    }
}

playRound(1, 1);