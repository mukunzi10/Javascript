function getUserChoice(userInput){
 userInput = userInput.toLowerCase();
 if(userInput === 'rock' || userInput === 'paper' 
|| userInput === 'scissors'){
     console.log("user choice ="+ userInput);
     return userInput
 }
}
// getUserChoice('Paper');
function getComputerChoice(){
 let randomNumber = Math.floor(Math.random()*3);
 switch (randomNumber) {
     case 0:
         console.log("Computer Choice: rock");
         return 'rock';          
     case 1:
         console.log("Computer Choice: paper");
         return 'paper';
     case 2: 
     console.log("Computer Choice: scissors");
         return 'scissors';
     default:
         break;
 }
 
}
function determineWinner (userChoice,computerChoice){
 if(userChoice === computerChoice){
     return 'Match tied';
 }
 if(userChoice === 'rock'){
     if(computerChoice==='paper'){
         return 'Computer wins!'
     }
     else {
         return 'Gustave Win!';
     }
 }
 if(userChoice === 'paper'){
     if(computerChoice==='scissors'){
         return 'Computer wins!'
     }
     else {
         return 'Gustave Win!';
     }
 }
 if(userChoice === 'scissors'){
     if(computerChoice==='rock'){
         return 'Computer wins!'
     }
     else {
         return 'Gustave Win!';
     }
 }
}
console.log(determineWinner (getUserChoice('scissors') ,
getComputerChoice()));