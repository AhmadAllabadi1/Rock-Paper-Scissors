function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1
    if (choice===1) {
        return "Rock"
    }
    else if (choice===2) {
        return "Paper"
    }

    else{
        return "Scissors"
    }
}



function playRound(computer,person) {
    if (person.toUpperCase() === computer.toUpperCase()) {
        return null
    }

    else if(person.toUpperCase() === "ROCK" && computer.toUpperCase()==="SCISSORS"){
        return true
    }

    else if(person.toUpperCase() === "PAPER" && computer.toUpperCase()==="ROCK"){
        return true
    }

    else if(person.toUpperCase() === "SCISSORS" && computer.toUpperCase()==="PAPER"){
        return true
    }
    


    else if(computer.toUpperCase() === "ROCK" && person.toUpperCase()==="SCISSORS"){
        return false
    }

    else if(computer.toUpperCase() === "PAPER" && person.toUpperCase()==="ROCK"){
        return false
    }

    else if(computer.toUpperCase() === "SCISSORS" && person.toUpperCase()==="PAPER"){
        return false
    }

    else{
        return "Nothing"
    }
}


function game(){
        let userInput=prompt("Rock, Paper or Scissors?")
        let computerInput=getComputerChoice()
        console.log(playRound(computerInput,userInput))
}

const RockB = document.querySelector(".RockB");
const PaperB = document.querySelector('.PaperB');
const ScissorsB = document.querySelector('.ScissorsB');

const container = document.querySelector(".container")
const playElem = document.querySelector(".playerImg");
const oppElem = document.querySelector(".oppImg");
const uScore = document.querySelector(".uScore");
const oppScore = document.querySelector(".oppScore");

uScore.textContent = "0";
oppScore.textContent = "0";


RockB.addEventListener('click', function(){
    let compChoice = getComputerChoice();
    if (playRound(compChoice,"Rock")===true){
        let newScore = parseInt(uScore.textContent)+1
        uScore.textContent = newScore.toString()
    }
    else if (playRound(compChoice,"Rock")===false) {
        let newScore = parseInt(oppScore.textContent)+1
        oppScore.textContent = newScore.toString()
    }
    playElem.src = "images/Rock.png"
    oppElem.src = "images/"+compChoice+".png"
    
})

PaperB.addEventListener('click', function(){
    let compChoice = getComputerChoice()
    if (playRound(compChoice,"Paper")===true){
        let newScore = parseInt(uScore.textContent)+1
        uScore.textContent = newScore.toString()
    }
    else if (playRound(compChoice,"Paper")===false) {
        let newScore = parseInt(oppScore.textContent)+1
        oppScore.textContent = newScore.toString()
    }
    playElem.src = "images/Paper.png"
    oppElem.src = "images/"+compChoice+".png"
})

ScissorsB.addEventListener('click', function(){
    let compChoice = getComputerChoice();
    if (playRound(compChoice,"Scissors")===true){
        let newScore = parseInt(uScore.textContent)+1
        uScore.textContent = newScore.toString()
    }
    else if (playRound(compChoice,"Scissors")===false) {
        let newScore = parseInt(oppScore.textContent)+1
        oppScore.textContent = newScore.toString()
    }
    playElem.src = "images/Scissors.png"
    oppElem.src = "images/"+compChoice+".png"
})