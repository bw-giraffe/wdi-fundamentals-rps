function getInput() {
     return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    var playerMove = 0;
    // If a `move` has a value, your expression should evaluate to that value.
    while(playerMove != "rock" && playerMove != "scissors" && playerMove != "paper") {
    	var playerMove = getInput();
    }
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove; /* Your Expression */
}

function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    var computerMove = randomPlay();
    return computerMove/* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    //if it's a tie
    if(playerMove === computerMove) {
    	winner = "tie";
    //rock beats scissors	
    } else if(playerMove === "rock") {
    	if(computerMove === "scissors") {
    		winner = "player";
    	} else {
    		winner = "computer";
		}
	//scissors beats paper
	} else if(playerMove === "scissors") {
		if(computerMove === "paper") {
			winner = "player";
		} else {
			winner = "computer";
		}
	//paper beats rock
	} else if(playerMove === "paper") {
		if(computerMove === "rock") {
			winner = "player";
		} else {
			winner = "computer"; 
		}
	}		 
    //now return the winner
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the     computer has won five times.
    /* YOUR CODE HERE */
    while((playerWins < 5) && (computerWins < 5)) {
    	var p = getPlayerMove(); //
        var c = getComputerMove();
        var theWinner = getWinner(p, c);
        //console.log("theWinner is " + theWinner + "p: " + p + "c: " + c);
    	//this is where we add the score up
        if(theWinner === "player") {
    		playerWins+=1;
    	} else if(theWinner === "computer") {
    		computerWins+=1;
    	} else {
    		playerWins+=0;
    		computerWins+=0;
    	}
    	alert("You said: " + p + "\n The computer said: " + c + "\n \n SCORE " + "\n" + "Player: " + playerWins + "\nComputer: " + computerWins);
    	//console.log("the player wins so far  " + playerWins);
     	//console.log("the computer wins so far  " + computerWins);
    }
    return [playerWins, computerWins];
}

playToFive();