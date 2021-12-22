//values that translates rock, paper, scissors into numbers
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

//keep scores
let playerScore = 0;
let computerScore = 0;

let gamesPlayed = 0;

let earlyExit = false;

//This fuction randomly generates a number between 0 and 2.
//0 being rock, 1 being paper and 2 being scissors
function computerPlay(){
    return Math.floor(Math.random()*3); //randomly select Whole number and return it
}

//Play one round of rock, paper, scissors
function playRound(playerSelection, computerSelection){

    let playerChoice = "";
    let computerChoice = "";

    //First checks for a draw
    if(playerSelection == computerSelection){
        return "You draw this round!";
    }

    //These 3 cases checks for a win
    else if(playerSelection == PAPER && computerSelection == ROCK){
        playerScore ++;
        return "You win! Paper beats Rock.";
    }
    else if(playerSelection == ROCK && computerSelection == SCISSORS){
        playerScore ++;
        return "You win! Rock beats Scissors.";
    }
    else if(playerSelection == SCISSORS && computerSelection == PAPER){
        playerScore ++;
        return "You win! Scissors beats paper.";
    }

    else{

        //Convert the players selection from a number to a string
        if(playerSelection == ROCK){
            playerChoice = "Rock";
        }
        else if(playerSelection == PAPER){
            playerChoice = "Paper";
        }
        else{
            playerChoice = "Scissors";
        }

        //Convert the computer's selection from a number to a string
        if(computerSelection == ROCK){
            computerChoice = "Rock";
        }
        else if(computerSelection == PAPER){
            computerChoice = "Paper";
        }
        else{
        computerChoice = "Scissors";
        }

        computerScore++;

        return "You loose." + computerChoice + " beats " + playerChoice;
    }
}

//Play until either computer or player reaches a score of 3 first
function game(){
    //Introduce the user to the game and get the user's input 

    while (gamesPlayed < 5){

        gamesPlayed ++;
        let choice = prompt("Welcome to Rock, Paper & Scissors! Enter your choice.", "Exit");

        if(choice == undefined){
            earlyExit = true;
            console.log("Chickened Out!");
            break;
        }

        console.log(choice.toLowerCase());
        
        if(choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors"){
            
            if(choice.toLowerCase() == "rock"){
                console.log(playRound(ROCK, computerPlay()));

                console.log("Computer: " + computerScore + "     " + "You: " + playerScore);
                console.log("Games played = " + gamesPlayed);  
            }
            else if(choice.toLowerCase() == "paper"){
                console.log(playRound(PAPER, computerPlay()));

                console.log("Computer: " + computerScore + "    " + "You: " + playerScore);
                console.log("Games played = " + gamesPlayed);
            }
            else{
                console.log(playRound(SCISSORS, computerPlay()));

                console.log("Computer: " + computerScore + "     " + "You: " + playerScore);
                console.log("Games played = " + gamesPlayed);
            }

            if(computerScore == 3 || playerScore == 3){
                break;//Exit if any player reaches 3 before 5 games end.
            }
        }
        else if(choice.toLowerCase() == "exit"){
            earlyExit = true;
            console.log("Chickened out!")
            break; //Exit game if user wants to exit
        }
        else{
        console.log("Please enter either rock, paper or scissors.");//User entered wrong text
        gamesPlayed--;
        }

    }

    if(!earlyExit){
        if (playerScore > computerScore){
            console.log("Results: You win the game!");
        }
        else if (computerScore > playerScore){
            console.log("Reseults: You loose the game");
        }
        else if(computerScore == playerScore){
            console.log("Results: Draw game.")
        }
    }

    gamesPlayed = 0;
    playerScore = 0;
    computerScore = 0;
}