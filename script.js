function getComputerChoice()
{

    // Randomly picks number between 0 and 2
    let choiceNum = Math.floor( Math.random() * 3 );

    let choiceString = "";


    switch (choiceNum)
    {

        case 0:

            choiceString = "rock";
            break;

        case 1:

            choiceString = "paper";
            break;

        case 2:

            choiceString = "scissors";
            break;

    }

    return choiceString;

}

//function getHumanChoice()
//{


//    let userChoice = prompt("What is your human choice?");
    
//    return userChoice;

//}

function playRound(humanChoice, computerChoice)
{

    //console.log(typeof humanChoice);
    let localHumanChoice = humanChoice.toLowerCase();

    // 1 = human wins
    // 2 = draw
    // 3 = computer wins
    let winnerNum = 0;

    if (humanChoice === "rock" && computerChoice === "rock")
    {
        winnerNum = 2;
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        winnerNum = 3;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        winnerNum = 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        winnerNum = 1;
    }
    else if (humanChoice === "paper" && computerChoice === "paper")
    {
        winnerNum = 2;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        winnerNum = 3;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        winnerNum = 3;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        winnerNum = 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors")
    {
        winnerNum = 2;
    }

    displayDiv2.textContent = "";

    switch (winnerNum)
    {

        case 1:

            //console.log("The human wins! " + humanChoice + " beats " + computerChoice);
            displayDiv2.textContent = "The human wins! " + humanChoice + " beats " + computerChoice;
            break;

        case 2:

            //console.log("It's a draw!");
            displayDiv2.textContent ="It's a draw!";
            break;

        case 3:

            //console.log("The computer wins! " + computerChoice + " beats " + humanChoice);
            displayDiv2.textContent = "The computer wins! " + computerChoice + " beats " + humanChoice;
            break;

    }

    if (winnerNum === 1)
    {
        humanScore++;
    }
    else if (winnerNum === 3)
    {
        computerScore++;
    }

    displayDiv.textContent = `humanScore = ${humanScore}. computerScore = ${computerScore}`;

    if (humanScore >= 5)
    {
        displayDiv3.textContent = "HUMAN WINS!!!";
    }
    else if (computerScore >= 5)
    {
        displayDiv3.textContent = "SKYNET WINS!!!";
    }

    return winnerNum;

}

//function updateScore(roundResults, humanScore, computerScore)
//{

//    if (roundResults === 1)
//    {
//        humanScore++;
//    }
//    else if (roundResults === 3)
//    {
//        computerScore++;
//    }

//    //console.log(`humanScore = ${humanScore}. computerScore = ${computerScore}`);

//    const displayDiv = document.querySelector("#display-div");
//    displayDiv.textContent = `humanScore = ${humanScore}. computerScore = ${computerScore}`;

//}

function playGame()
{

    //computerString = getComputerChoice();

    //let humanScore = 0;
    //let computerScore = 0;
    //let roundResults = 0;
    //let computerString = "";

    const rockButton = document.querySelector("#rock-button");
    rockButton.addEventListener("click", () =>
        {
            computerString = getComputerChoice();
            roundResults = playRound("rock", computerString);
            //updateScore(roundResults, humanScore, computerScore);
        });

    const paperButton = document.querySelector("#paper-button");
    paperButton.addEventListener("click", () =>
        {
            computerString = getComputerChoice();
            roundResults = playRound("paper", computerString);
            //updateScore(roundResults, humanScore, computerScore);
        });

    const scissorsButton = document.querySelector("#scissors-button");
    scissorsButton.addEventListener("click", () =>
        {
            computerString = getComputerChoice();
            roundResults = playRound("scissors", computerString);
            //updateScore(roundResults, humanScore, computerScore);
        });

    //console.log(`roundResults: ${roundResults}\n`);

    //if (roundResults === 1)
    //{
    //    humanScore++;
    //}
    //else if (roundResults === 3)
    //{
    //    computerScore++;
    //}

    //const displayDiv = document.querySelector("#display-div");
    //displayDiv.textContent = `humanScore = ${humanScore}. computerScore = ${computerScore}`;


}

    let humanScore = 0;
    let computerScore = 0;
    let roundResults = 0;
    let computerString = "";

    const displayDiv = document.querySelector("#display-div");
    displayDiv.textContent = `humanScore = ${humanScore}. computerScore = ${computerScore}`;
    const displayDiv2 = document.querySelector("#display-div2");
    const displayDiv3 = document.querySelector("#display-div3");

playGame();