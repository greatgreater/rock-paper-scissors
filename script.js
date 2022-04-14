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
    let draw = () => alert("Draw!");
    let lost = () => alert("You lost!");
    let won = () => alert("You won!");

    //playerchoice = rock
    if (playerSelection === "rock" && computerSelection === "rock")
    {
        draw();
    }

    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        lost();
    }

    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        won();
    }
    //playerchoice = paper
    if (playerSelection === "paper" && computerSelection === "rock")
    {
        won();
    }

    else if (playerSelection === "paper" && computerSelection === "paper")
    {
        draw();
    }

    else if (playerSelection === "paper" && computerSelection === "scissors")
    {
        lost();
    }
    //playerchoice = scissors
    if (playerSelection === "scissors" && computerSelection === "rock")
    {
        lost();
    }

    else if (playerSelection === "scissors" && computerSelection === "paper")
    {
        won();
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors")
    {
        draw();
    }

}

let game = (rounds) => {
    for (let i = 1; i <= rounds; i++)
    {
        let playerSelection = ''
        //takes player input as case insensitive
        playerSelection = prompt("What is your choice?").toLowerCase();
        console.log(playerSelection); 

        // while (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
}

const rounds = 5;
game(rounds);
