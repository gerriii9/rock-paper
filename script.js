function getComputerChoice(){
    const gestures = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*gestures.length);
    return gestures[randomIndex];
}

function playround(playerSelection, computerSelection){
    if (playerSelection === computerSelecion){
            return "its a tie"}
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
            return "You just lost to a computer";}
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            return("Congrats you won");}
    else if  (playerSelection === 'paper' && computerSelection === 'rock'){
            return "congrats, you won";}      
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            return "you just lost to a computer";}
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            return "congrats you won";}
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return "you just lost to a computer"}
    else {
        return "please select 'rock', 'paper' or 'scissors'"
    }    
}
const playerSelection = 'rck';
const computerSelecion = getComputerChoice();

const result = playround(playerSelection, computerSelecion);
console.log(result);
