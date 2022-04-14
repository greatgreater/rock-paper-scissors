let computerPlay = () => {
    variable = Math.floor(Math.random() * 3) + 1;
    if (variable === 1)
    {
        return "rock";
    }
    else if (variable === 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

let playRound = (playerSelection, computerSelection ) => {
    let draw = () => "Draw!";
    let lost = () => "You lost!";
    let won = () => "You won!";

    //playerchoice = rock
    if (playerSelection === "rock" && computerSelection === "rock")
    {
        return "draw";
    }

    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        return "lost";
    }

    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        return "won";
    }
    //playerchoice = paper
    if (playerSelection === "paper" && computerSelection === "rock")
    {
        return "won";
    }

    else if (playerSelection === "paper" && computerSelection === "paper")
    {
        return "draw";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors")
    {
        return "lost";
    }
    //playerchoice = scissors
    if (playerSelection === "scissors" && computerSelection === "rock")
    {
        return "lost";
    }

    else if (playerSelection === "scissors" && computerSelection === "paper")
    {
        return "won";
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors")
    {
        return "draw";
    }

}

let game = (rounds) => {
    let playerScore = 0;
    let computerScore = 0;
    let gameScore;

    for (let i = 1; i <= rounds; i++)
    {
        let playerSelection = '';
        let validSelection = 0;
        
        do 
        {
            playerSelection = prompt("What is your choice?").toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper"
                || playerSelection === "scissors")
                    validSelection = 1;
            else
                alert("Invalid choice! Try again.")
        }
        while (validSelection === 0)

        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        if (outcome === "won")
        {
            alert("You won!");
            playerScore++;
        }
        else if (outcome === "lost")
        {
            alert("You lost!");
            computerScore++;
        }
        else 
        {
            alert("Draw!");
        }

        gameScore = 'Player: ' + playerScore + ' | Computer: ' + computerScore;
        console.log(gameScore); 
    }
    if (playerScore > computerScore)
        alert("You won!");
    else if (playerScore < computerScore)
        alert("You lost!");
    else 
        alert("It's a tie!");
}

const rounds = 5;

game(rounds);
