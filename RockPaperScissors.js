//0 = rock
//1 = paper
//2 = scissors (for computer)

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);

    if(compChoice = 0){
        console.log("Computer chooses rock")
    }else if(compChoice = 1){
        console.log("Computer choice is paper");

    }
    else if(compChoice = 2){
        console.log("Computer choice is scissors");
    }
    else{
        console.log("error!");
    }
    return compChoice;
}

function getHumanChoice(){
    let humChoice = prompt("Choose option 0(rock), option 1(paper), or option 2(scissors)");
    if(humChoice = 0){
        console.log("You have choosen rock");
    }else if(humChoice = 1){
        console.log("You have choosen paper");
    }else if(humChoice = 2){
        console.log("You have choosen scissors");
    }
    
}




console.log(getComputerChoice());