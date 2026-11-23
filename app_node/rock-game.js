const score = { // to start off the game the wins, losses and ties have to be 0.
    wins:0,
    losses:0,
    ties:0,
    updateScore:function(value){// we'll add a function that returns the wins +1 after avery win
        if(this.hasOwnProperty(value)){
            this[value]++
        }else{
            console.log("Error does not fit this property")
        }
    },
    reset: function(){//we'll add a reset function to reset the game and set the wins back to 0
        this.wins=0
    }
}

function runGame(){
    let userInput = "paper"
    let computerInput = "Rock"

    if (userInput === computerInput){
        console.log("Tie")
        score.updateScore("ties")
    } else if ((userInput === "Rock") && (computerInput === "Scissors") || (userInput === "Paper" && computerInput === "Rock") || (userInput === "Scissors" && computerInput === "Paper")){
        console.log("User Wins")
        score.updateScore("wins")
    }else if((computerInput === "Rock") && (userInput === "Scissors") || (computerInput === "Paper" && userInput === "Rock") || (computerInput === "Scissors" && userInput === "Paper")){
        console.log("Computer Wins")
        score.updateScore("losses")
    }else{
        console.log("Error")
    }

    console.log(score)

    if (score.wins === 5){
        console.log("User wins!!!")
    }

}

runGame()
runGame()
runGame()
runGame()
runGame()