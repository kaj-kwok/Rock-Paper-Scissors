let playerScore = 0;
let computerScore = 0;
const options = document.querySelectorAll('button');
let playerSelection

// Click to Play
options.forEach(options => options.addEventListener('click', (e) => {
    playerSelection = e.target.id
    computerSelection = computerPlay()
        if (playerScore >= 5 || computerScore >= 5) {
            alert("Game Over!");
            location.reload()
        }
        else
            switch (playerSelection + computerSelection) {
            case "RockScissors":
            case "PaperRock":
            case "ScissorsPaper":
                playerWins(playerSelection, computerSelection);
            break;
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                computerWins(playerSelection, computerSelection);
            break;
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                document.querySelector(".results").innerHTML = `It's a Draw!`;
            break;
        }
}))

//add to score
function playerWins(playerSelection, computerSelection) {
    playerScore++;
    document.querySelector(".results").innerHTML = `Winner! Player 1's ${playerSelection} beats Computer's ${computerSelection}`;
    document.getElementById("playerScore").innerHTML = playerScore;
}

function computerWins(playerSelection, computerSelection) {
    computerScore++;
    document.querySelector(".results").innerHTML = `Lose! Player 1's ${playerSelection} loses to Computer's ${computerSelection}`;
    document.getElementById("computerScore").innerHTML = computerScore;
}


function computerPlay() {
    var computerSelect = Array('Rock', 'Paper', 'Scissors');
    return computerSelect = computerSelect[Math.floor(Math.random()*computerSelect.length)];
}


//changed