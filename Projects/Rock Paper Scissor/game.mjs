import randomInteger from "random-int";
import PromptSync from "prompt-sync";



let choice = ["rock", "paper", "scissor"]

let instruction = "0 for rock, 1 for paper, 2 for scissor" + " ";
let outcome = "ready to play"

let computerChoice = randomInteger(0,2)
let systemChoice = choice[computerChoice]

let prompt = PromptSync()
let userInput = prompt(instruction)
let userchoice = choice[userInput]

if (userchoice === systemChoice) {
    console.log ("Match Drawn")
}
 else if (userchoice === "rock" && systemChoice === "paper"){
    console.log("You Lost!")
         }
 else if (userchoice === "rock" && systemChoice === "scissor"){
    console.log("You won!")
         }
     
else if (userchoice === "paper" && systemChoice === "rock"){
     console.log("You Won!")
         }
else if (userchoice === "paper" && systemChoice === "scissor"){
    console.log("You Lost!")
        }
else if (userchoice === "scissor" && systemChoice === "rock"){
    console.log("You Lost!")
         }
else if (userchoice === "scissor" && systemChoice === "paper"){
    console.log("You Won!")
         }

console.log ("user choose to" + " " + userchoice)
console.log ("computer choose to" + " " + systemChoice)
console.log (outcome)