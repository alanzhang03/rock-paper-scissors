//0 = rock
//1 = paper
//2 = scissors (for computer)
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compChoice = Number(Math.floor(Math.random() * 3));
        if(compChoice ===  0){
            console.log("Computer picked rock");       
        }
        else if(compChoice === 1){
            console.log("Computer picked paper"); 
        }
        else{
            console.log("Computer picked scissors");
        }
    return compChoice;

}

function getHumanChoice(){
    let humChoice = prompt("Rock, Paper, or Scissors?");
    let numValue;

    if(humChoice.toLowerCase() === "rock"){
        numValue = 0;
        console.log("||You have choosen rock, I am testing out my git branch!");
        return numValue;
    }
    else if(humChoice.toLowerCase() === "paper"){
        numValue = 1;
        console.log("||You have choosen paper");
        return numValue;

    }
    else if(humChoice.toLowerCase() === "scissors"){
        numValue = 2;
        console.log("||You have choosen scissors");
        return numValue;
    }
    else{
        console.log("Please input valid choice!");
    }
    return numValue;
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if(humanChoice === 0 && computerChoice === 0){
        console.log("Tie! Play again!");
    }
    else if(humanChoice === 0 && computerChoice === 1){
        console.log("You Lose, computer wins!");
        computerScore++;
    }
    else if(humanChoice === 0 && computerChoice === 2){
        console.log("You win! Computer loses!");
        humanScore++;
    }
    else if(humanChoice === 1 && computerChoice === 1){
        console.log("Tie! Play again!");
    }
    else if(humanChoice === 1 && computerChoice === 0){
        console.log("You win! Computer loses!");
        humanScore++;
    }
    else if(humanChoice === 1 && computerChoice === 2){
        console.log("You Lose, computer wins!");
        computerScore++;
    }
    else if(humanChoice === 2 && computerChoice === 2){
        console.log("Tie! Play again!");
    }
    else if(humanChoice === 2 && computerChoice === 0){
        console.log("You lose, computer wins!");
        computerScore++;
    }
    else if(humanChoice === 2 && computerChoice === 1){
        console.log("You win! Computer loses");
        humanScore++;
    }
    else{
        console.log("Error, something went wrong");
    }
    console.log(`Human Score:${humanScore} 
Compuer Score:${computerScore}`);
}


const playGameBtn = document.querySelector("#playGameBtn");
playGameBtn.style.backgroundColor = "green";
playGameBtn.addEventListener("click", playRound());



const choiceBtns = document.getElementById("choiceBtns")
const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");

rockbtn.textContent = "Rock";
paperbtn.textContent = "Paper";
scissorsbtn.textContent = "Scissors";

rockbtn.style.backgroundColor="red";
paperbtn.style.backgroundColor="red";
scissorsbtn.style.backgroundColor="red";



choiceBtns.appendChild(rockbtn);
choiceBtns.appendChild(paperbtn);
choiceBtns.appendChild(scissorsbtn);


