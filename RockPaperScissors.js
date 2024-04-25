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
    let humanChoice = Number(prompt("Pick option 0, 1 or 2"));
    let numValue;

    if(humanChoice === "R"){
        console.log("You have choosen rock");
    }
    else if(humanChoice === 1){
        console.log("You have choosen paper");

    }
    else if(humanChoice === 2){
        console.log("You have choosen scissors");
    }
    
}

function playRound(humanChoice, computerChoice){


}

getHumanChoice();

getComputerChoice();