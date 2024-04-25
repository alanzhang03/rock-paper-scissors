//0 = rock
//1 = paper
//2 = scissors (for computer)
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compChoice = Number(Math.floor(Math.random() * 3));
    console.log(compChoice);
        if(compChoice ===  0){
            console.log("rock");
        }
        else if(compChoice === 1){
            console.log("paper");
        }
        else{
            console.log("scissors");
        }

}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    let numValue;

    if(humanChoice === "Rock"){
        numValue = 0;
        console.log("You have choosen rock");
    }
    else if(humanChoice === "Paper"){
        numValue = 1;
        console.log("You have choosen paper");

    }
    else if(humanChoice === "Scissors"){
        numValue = 2;
        console.log("You have choosen scissors");
    }
    else{
        console.log("Please input valid choice!");
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice )

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);