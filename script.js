//creating an array of the choices

const choices = ["scissors","paper","rock"];

// create a new function named getComputerChoice

function getComputerChoice() {
    //generating a random number from 0 to the array length
    const randomIndex = Math.floor(Math.random() * choices.length);
    return computerChoices[randomIndex];

}

// Create a function that takes the user choice and returns it 
 
function getHumanChoice () {
    let userInput = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
    while (!choices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please chooose rock, paper or scissors: ").toLowerCase();
    }
    return userInput;
    
}

console.log(getHumanChoice());




