//0 = rock
//1 = paper
//2 = scissors (for computer)

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

function getHumanChoice(){
    let humanChoice = Number(prompt("Pick option 0, 1 or 2"));
    if(humanChoice != '0' || humanChoice != '1' || humanChoice != '2'){
        console.log("Please try again!");
    }

    return humanChoice;
}


console.log(getHumanChoice());
console.log(getComputerChoice());