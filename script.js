//creating an array of the choices

const choices = ["scissors","paper","rock"];

let humanScore = 0;
let computerScore = 0;


// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("It is a tie!")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore ++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore ++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerScore ++;
    } else if (humanChoice == "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore ++;
    } else if (humanChoice == "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore ++;
    } else {
        console.log("You lose! Rock beats Scissors!");
        computerScore ++;
    }
}


// writing the logic to play the entire game

function playGame(){
    
    //loop runs until i is less than 5
    for ( let i = 1 ; i < 6; i++) {

        // create a new function named getComputerChoice

        function getComputerChoice() {
            //generating a random number from 0 to the array length
            let randomIndex = Math.floor(Math.random() * choices.length);
            console.log ( "Computer chose " + choices[randomIndex]);
            return choices[randomIndex]; 
        };

        // Create a function that takes the user choice and returns it 
 
        function getHumanChoice () {
            let userInput = prompt("Game " + i + ": Please enter rock, paper, or scissors: ").toLowerCase();
            while (!choices.includes(userInput)) {
                userInput = prompt("Invalid choice. Please chooose rock, paper or scissors: ").toLowerCase();
            }
            console.log("You chose " + userInput);
            return userInput;
        }

        console.log("Game " + i);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        playRound(humanSelection, computerSelection);
    
    }

}
      




playGame();
