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

function getHumanChoice()
{


    let userChoice = prompt("What is your human choice?");
    
    return userChoice;

}

function playRound(humanChoice, computerChoice)
{

    console.log(typeof humanChoice);
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

    switch (winnerNum)
    {

        case 1:

            console.log("The human wins! " + humanChoice + " beats " + computerChoice);
            break;

        case 2:

            console.log("It's a draw!");
            break;

        case 3:

            console.log("The computer wins! " + computerChoice + " beats " + humanChoice);
            break;

    }

    return winnerNum;

}

function playGame()
{

    let humanScore = 0;
    let computerScore = 0;
    let roundResults = 0;

    for (let i = 1; i <= 5; i++)
    {

        humanString = getHumanChoice();
        computerString = getComputerChoice();
        roundResults = playRound(humanString, computerString);
        if (roundResults === 1)
        {
            humanScore++;
        }
        else if (roundResults === 3)
        {
            computerScore++;
        }
        console.log(`humanScore = ${humanScore}. computerScore = ${computerScore}`);
        roundResults = 0;

    }

}

playGame();