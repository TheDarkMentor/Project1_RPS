/*
let player1 = "";
let player2 = "";
let character1 = ""
let character2 = ""

assign_player()
console.log("hello lets start our game of rock paper scissors")
console.log("getting game board ready")
console.log(board)



function assign_player(p1, p2) {
    player1 = prompt("Player 1, do you wish to be 'x' or 'o'? :>");
    if (player1 == character1) {
        return console.log("Player 1 chose " + character1);
    } else if (player1 == character2) {
        return console.log("Player1 chose " + character2)
    } else {
        console.log("Please choose either 'x' or 'o'")
    }
}
    */

let player1 = ""
let player2 = ""

let rock = 1
let paper = 2 
let scissors = 3



function player1_choice() {
    player1 = prompt("Choose rock, paper or scissors")
        if (player1 == "rock") {
            player1 = rock
            return console.log("You chose " + player1)
        }
        else if (player1 == "paper") {
            player1 = paper
            return console.log("You chose " + player1)
        }
        else if (player1 == "scissors") {
            player1 = scissors
            return console.log("You chose " + player1)
        }
        else {
            return console.log("You did not choose the correct option. Choose rock, paper or scissors")
        }

}

function player2_choice() {
    player2 = Math.floor(Math.random() * 3) + 1;
    return console.log("Player 2 chose " + player2);
}

function game_logic(func1, func2) {
    if (player1 == player2) {
        return console.log("This was a tie. You both chose " + player1 + " Go again!")
    }
    else if (player1 == rock && player2 == paper) {
        return console.log("Paper beats rock you lose")
    }
    else if (player1 == rock && player2 == scissors) {
        return console.log("rock beats scissors. You win")
    }
    else if (player1 == scissors && player2 == rock) {
        return console.log("You lose. Scissors gets demolished by rock")
    }
    else if (player1 == scissors && player2 == paper) {
        return console.log("You win. Scissors beats paper")
    }
    else if (player1 == paper && player2 == rock) {
        return console.log("You Win. Paper covers rocks")
    }
    else if (player1 == paper && player2 == scissors) {
        return console.log("You lose. Scissors cut paper")
    }
    else {
        return console.log("Bro...Try again")
    }
}

player1_choice()
player2_choice()
game_logic(player1_choice, player2_choice)