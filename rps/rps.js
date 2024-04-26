function getComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice()
{
    const answer = prompt("What is your choice?");

    return answer.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice) {
        console.log("Same thing chosen");
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
        return;
    } else if (humanChoice === "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;
        return;
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        humanScore++;
        return;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore++;
        return;
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper");
        humanScore++
        return;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors");
        computerScore++;
        return;
    }
}


function playGame()
{
    
    for (i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
    }

    const result = (humanScore === computerScore) ?
    `Draw!\n You: ${humanScore}\n Computer: ${computerScore}` :
    (humanScore > computerScore) ? `You win!!!\n You: ${humanScore}\n Computer: ${computerScore}` : `You lose!!\n You: ${humanScore}\n Computer: ${computerScore}`

    return result;
}

console.log(playGame());