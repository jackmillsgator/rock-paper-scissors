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

let result = getComputerChoice();
console.log(result);