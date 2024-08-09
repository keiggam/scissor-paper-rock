//creating an array of the choices

const choices = ["scissors","paper","rock"];

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// create a function to getComputerChoice

let computerChoice;

function getComputerChoice() {
    //generating a random number from 0 to the array length
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex]; 
    document.getElementById('computerDisplay').textContent = `The computer chose ${computerChoice} as their weapon!`;
};

// Write the logic to play a single round

function playRound(humanChoice, getcomputerChoice) {

    if (gameOver) return;

    if (humanChoice === "rock" && computerChoice === "scissors") {
        document.getElementById('result').textContent = `You win! Rock beats Scissors!`;
        humanScore ++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        document.getElementById('result').textContent = `You lose! Paper beats Rock!`;
        computerScore ++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        document.getElementById('result').textContent = `You lose! Scissors beats Paper!`;
        computerScore ++;
    } else if (humanChoice == "paper" && computerChoice === "rock") {
        document.getElementById('result').textContent = `You win! Paper beats Rock!`;
        humanScore ++;
    } else if (humanChoice == "scissors" && computerChoice === "paper") {
        document.getElementById('result').textContent = `You win! Scissors beats Paper!`;
        humanScore ++;
    } else if (humanChoice == "scissors" && computerChoice === "rock") {
        document.getElementById('result').textContent = `You lose! Rock beats Scissors!`;
        computerScore ++;
    } else {
        document.getElementById('result').textContent = `It is a tie!`;
    }

    // update the score display
    document.getElementById('currentScore').textContent = `Current Score - Human : ${humanScore} , Computer : ${computerScore}`;

    // check if either player has reached 5 points
    if (humanScore === 5) {
        document.getElementById('winner').textContent = "Congratulations! You are the winner!";
        gameOver = true;

    } else if (computerScore === 5) {
        document.getElementById('winner').textContent = "Computer won the game! Better luck next time!";
        gameOver = true;
    }
};



// message display after player selects
function showDelayMessage(){
    document.getElementById('delayMessage').textContent = '***** The Computer Is Choosing Their Weapon *****';
    };


// add event listeners to the buttons

let humanChoice;

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {
    document.getElementById('computerDisplay').textContent = '';
    document.getElementById('result').textContent = '';
    humanChoice = 'rock';
    document.getElementById('humanDisplay').textContent = `You chose ${humanChoice} as your weapon!`;
    showDelayMessage();
    setTimeout(() => {
        playRound(humanChoice,getComputerChoice())}, 1000);
    } 
);

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    document.getElementById('computerDisplay').textContent = '';
    document.getElementById('result').textContent = '';
    humanChoice = 'paper';
    document.getElementById('humanDisplay').textContent = `You chose ${humanChoice} as your weapon!`;
    showDelayMessage();
    setTimeout(() => {
        playRound(humanChoice,getComputerChoice())}, 1000);
    } 
);

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    document.getElementById('computerDisplay').textContent = '';
    document.getElementById('result').textContent = '';
    humanChoice = 'scissors';
    document.getElementById('humanDisplay').textContent = `You chose ${humanChoice} as your weapon!`;
    showDelayMessage();
    setTimeout(() => {
        playRound(humanChoice,getComputerChoice())}, 1000);
    } 
);


// define the main game function 

function playGame(){
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
        
    // Display the current score
    console.log(`Current Score - Human : ${humanScore} , Computer : ${computerScore}`);
    

    // Display the winner of the game

    if ( humanScore > computerScore ) {
        console.log("You are the winner! Congratulations!");
    } else if ( humanScore < computerScore) {
        console.log("***Computer is the winner! Best luck next time!***");
    } else {
        console.log("The game is a tie overall.");
    }

}







