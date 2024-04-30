let humanScore = 0;
let computerScore = 0;

document.getElementById('rockBtn').addEventListener('click', () => playRound(0));
document.getElementById('paperBtn').addEventListener('click', () => playRound(1));
document.getElementById('scissorsBtn').addEventListener('click', () => playRound(2));

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const choices = ['rock', 'paper', 'scissors'];
    const resultText = document.getElementById('results');
    const scoreText = document.getElementById('score');

    if (humanChoice === computerChoice) {
        resultText.textContent = `Tie! Both chose ${choices[humanChoice]}.`;
    } else if ((humanChoice === 0 && computerChoice === 2) ||
               (humanChoice === 1 && computerChoice === 0) ||
               (humanChoice === 2 && computerChoice === 1)) {
        humanScore++;
        resultText.textContent = `You win! ${choices[humanChoice]} beats ${choices[computerChoice]}.`;
    } else {
        computerScore++;
        resultText.textContent = `You lose! ${choices[computerChoice]} beats ${choices[humanChoice]}.`;
    }

    scoreText.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? 'Human' : 'Computer';
        resultText.textContent += ` ${winner} wins the game!`;
        humanScore = 0;
        computerScore = 0;
    }
}
