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

function playerPlay () {
    let playerSelection = window.prompt("Enter your selection: ");

    // Formats the playerSelection string. Makes the first character uppercase and all remaining characters lowercase.
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    return playerSelection;
}

function round (playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if ("Rock" === computerSelection) {
                return -1;
            } else if ("Paper" === computerSelection) {
                return 0;
            } else if ("Scissors" === computerSelection) {
                return 1;
            }
            break;
        case "Paper":
            if ("Rock" === computerSelection) {
                return 1;
            } else if ("Paper" === computerSelection) {
                return -1;
            } else if ("Scissors" === computerSelection) {
                return 0;
            }
            break;
        case "Scissors":
            if ("Rock" === computerSelection) {
                return 0;
            } else if ("Paper" === computerSelection) {
                return 1;
            } else if ("Scissors" === computerSelection) {
                return -1;
            }
            break;
        default:
           return -1;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        let result = round (playerSelection, computerSelection);

        if (1 === result) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
            playerWins++;
        } else if (0 === result) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection + ".");
            computerWins++;
        } else {
            console.log("Tie or Invalid Input. Replay Round.");
            i--;
        }
    }

    if (playerWins > computerWins) {
        console.log("Player Wins! " + playerWins + " - " + computerWins + ".");
    } else {
        console.log("Computer Wins! " + computerWins + " - " + playerWins + ".");
    }
}