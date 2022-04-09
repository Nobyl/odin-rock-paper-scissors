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
