const humanChoice = document.querySelector("#humanChoice");
const computerChoice = document.querySelector("#computerChoice");

const humanScoreCounter = document.querySelector("#humanScoreCounter");
const computerScoreCounter = document.querySelector("#computerScoreCounter");

const roundStatus = document.querySelector("#status");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const end = document.querySelector("#end");
const winMessage = document.querySelector("#winMessage");
const playAgain = document.querySelector("#playAgain");

let play = true;
let humanScore = 0;
let computerScore = 0;

/**
 * Resets the game.
 */
function reset() {
    humanScore = 0;
    computerScore = 0;
    roundStatus.textContent = "First to 5 wins the game!";
    humanChoice.textContent = "?";
    computerChoice.textContent = "?";
    humanScoreCounter.textContent = "Player: " + humanScore;
    computerScoreCounter.textContent = "Computer: " + computerScore;
    play = true;
    end.style.display = "none";
}

/**
 * Displays end message when one of the players wins.
 * 
 * @param {boolean} humanWin - Whether or not the human player won.
 */
function win(humanWin) {
    play = false;
    if (humanWin) {
        winMessage.textContent = "You won!";
    } else {
        winMessage.textContent = "You lost!";
    }
    end.style.display = "flex";
}

/**
 * Randomly generates a move for the computer.
 * 
 * @returns {string} The computer's move.
 */
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

/**
 * Updates the text to display the human player's move.
 * 
 * @param {string} choice - The human player's move.
 */
function updateHumanChoice(choice) {
    if (choice == "rock") {
        humanChoice.textContent = "✊";
    } else if (choice == "paper") {
        humanChoice.textContent = "✋";
    } else {
        humanChoice.textContent = "✌️";
    }
}

/**
 * Updates the text to display the computer's move.
 * 
 * @param {string} choice 
 */
function updateComputerChoice(choice) {
    if (choice == "rock") {
        computerChoice.textContent = "✊";
    } else if (choice == "paper") {
        computerChoice.textContent = "✋";
    } else {
        computerChoice.textContent = "✌️";
    }
}

/**
 * Adds one to the human's score and checks if the human has won.
 */
function updateHumanScore() {
    humanScore = humanScore + 1;
    humanScoreCounter.textContent = "Player: " + humanScore;
    if (humanScore >= 5) {
        win(true);
    }
}

/**
 * Adds one to the computer's score and checks if the computer has won.
 */
function updateComputerScore() {
    computerScore = computerScore + 1;
    computerScoreCounter.textContent = "Computer: " + computerScore;
    if (computerScore >= 5) {
        win(false);
    }
}

/**
 * Plays a round of rock paper scissors, determining which player has won the round.
 * 
 * @param {string} humanChoice - The human player's move.
 * @param {string} computerChoice - The computer's move.
 */
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        roundStatus.textContent = "It's a tie!";
    } else if (humanChoice == "rock") {
        switch (computerChoice) {
            case "paper": 
                roundStatus.textContent = "You lose! Paper beats Rock.";
                updateComputerScore();
                break;
            case "scissors": 
                roundStatus.textContent = "You win! Rock beats Scissors.";
                updateHumanScore();
                break;
        }
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock": 
                roundStatus.textContent = "You win! Paper beats Rock."
                updateHumanScore();
                break;
            case "scissors": 
                roundStatus.textContent = "You lose! Scissors beats Paper."
                updateComputerScore();
                break;
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock": 
                roundStatus.textContent = "You lose! Rock beats Scissors";
                updateComputerScore();
                break;
            case "paper": 
                roundStatus.textContent = "You win! Scissors beats Paper.";
                updateHumanScore();
                break;
        }
    }
}

/**
 * If a winner has not been determined, plays a round with the human's move being rock.
 */
rock.addEventListener("click", () => {
    if (play) {
        let computerChoice = getComputerChoice();
        updateHumanChoice("rock");
        updateComputerChoice(computerChoice);
        playRound("rock", computerChoice);
    }
});

/**
 * If a winner has not been determined, plays a round with the human's move being paper.
 */
paper.addEventListener("click", () => {
    if (play) {
        let computerChoice = getComputerChoice();
        updateHumanChoice("paper");
        updateComputerChoice(computerChoice);
        playRound("paper", computerChoice);
    }
});

/**
 * If a winner has not been determined, plays a round with the human's move being scissors.
 */
scissors.addEventListener("click", () => {
    if (play) {
        let computerChoice = getComputerChoice();
        updateHumanChoice("scissors");
        updateComputerChoice(computerChoice);
        playRound("scissors", computerChoice);
    }
});

/**
 * Resets the game when the button is pressed.
 */
playAgain.addEventListener("click", () => {
    reset();
});