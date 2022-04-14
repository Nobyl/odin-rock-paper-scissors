const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
    playRound(button.textContent, computerPlay());
}));

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            calcResults (playerSelection, computerSelection, "Scissors", "Paper");
            break;
        case "Paper":
            calcResults (playerSelection, computerSelection, "Rock", "Scissors");
            break;
        case "Scissors":
            calcResults (playerSelection, computerSelection, "Paper", "Rock");
            break;
    }
}

function calcResults (playerSelection, computerSelection, playerWinCondition, playerLoseCondition) {
    const results = document.querySelector(".results");
    const result = document.createElement("p");

    switch (computerSelection) {
        case playerWinCondition:
            result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
            playerScore += 1;
            break;
        case playerLoseCondition:
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            computerScore += 1;
            break;
        case playerSelection:
            result.textContent = `Tie! ${playerSelection} versus ${computerSelection}.`;
            break;
    }

    results.appendChild(result);
    updateScore(playerScore, computerScore);
}

function updateScore (playerScore, computerScore) { 
    const score = document.querySelector(".score");
    score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore === 5) {
        endGame("Player");
    } else if (computerScore === 5) {
        endGame("Computer");
    }       
}

function endGame (winner) {
    const results = document.querySelector(".results");
    const result = document.createElement("h3");

    buttons.forEach(button => button.disabled = true);

    result.textContent = `${winner} Wins!`;
    results.appendChild(result);
}

function computerPlay () {
    let computerSelection = Math.floor(Math.random() * 3);

    switch (computerSelection) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}