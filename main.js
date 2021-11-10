let playerScore = 0;
let computerScore = 0;

//returns a radom choice
function computerPlay() { 
    let randomNum = Math.floor(Math.random() * 3)
    /*
    if (randomNum === 0) {
        return "Rock"
    }
    else if (randomNum === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }*/
    return (randomNum === 0) ? "Rock" : (randomNum === 1) ? "Paper" : "Scissors";
}

//play the game once 
function play(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "paper")
        {
            return "its a draw!"
        }
        else if (computerSelection.toLowerCase() === "rock") {
            return "You Win! Paper beats Rock"
        }
        else {
            return "You Lose! Scissors beats Paper"
        }
    }
    else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "paper")
        {
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection.toLowerCase() === "rock") {
            return "its a draw!"
        }
        else {
            return "You Win! Rock beats Scissors"
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "paper")
        {
            return "You Win! Scissors beats Paper"
        }
        else if (computerSelection.toLowerCase() === "rock") {
            return "You Lose! Rock beats Scissors"
        }
        else {
            return "its a draw!"
        }
    }   
}
/* this is conslose version
function game() {
    //declaring the needed variables
    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let result;
    //playing the game for 5 rounds
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("please select your choice (rock, paper, scissors)", "rock");
        result = play(playerSelection, computerSelection)
        console.log(result)
        alert(result)
        if (result.slice(0, 8) === "You Win!") {
            playerScore++
        }
        else if (result.slice(0, 9) === "You Lose!")
            computerScore++
    }
    result = (computerScore > playerScore) ? "Computer Won!" : (computerScore < playerScore) ? "Congrats You Won :)" : "it was a draw!"
    console.log(result)
}

game()
*/
//console.log(computerPlay())

//this is the ui version
function game(){
    choices = document.querySelectorAll(".choice");
    p = document.createElement('p');
    p.style.cssText = "text-align: center; font: bold 22px monospace; padding: 50px;"
    body = document.querySelector('body')
    body.appendChild(p)
    let humanScore = 0
    let computerScore = 0

    choices.forEach(element => {
        element.addEventListener('click', (e) => {
            result = play(e.target.textContent, computerPlay())
            if (result.slice(0, 8) === "You Win!") {
                humanScore++;
            }
            else if (result.slice(0, 9) === "You Lose!")
                computerScore++;
            p.textContent = result + `\nyour score: ${humanScore}, computer score: ${computerScore}`
            if (humanScore === 5) {
                humanScore = 0;
                computerScore = 0;
                p.textContent = ('you have won congrats!')
            }
            else if(computerScore === 5) {
                humanScore = 0;
                computerScore = 0;
                p.textContent = ('you have Lost!')
            }
        })
    });
}

game()



