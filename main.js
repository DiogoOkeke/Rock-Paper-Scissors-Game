"use strict"

//Getting all required elements

//Landing page

let landingPage = document.querySelector('.landing-page');
let throwText = document.querySelector('.throw-text');
let throwTextTwo = document.querySelector('.throw-text-two');
let throwTextThree = document.querySelector('.throw-text-three');
let inputTag = document.querySelector('.input-tag');
let startGame = document.querySelector('.start-game');

// Rock-Paper-Scissors Page

let mainContainer = document.querySelector('.main-container');
let botChoice = document.querySelector('.bot-choice');
let playerChoice = document.querySelector('.player-choice');
let botScoreTag = document.querySelector('.botScore-tag');
let playerScoreTag = document.querySelector('.playerScore-tag');
let playerName = document.querySelector('.player-name');
let resultPTag = document.querySelector('.result-pTag');
let buttons = document.querySelectorAll('.buttons');
let clearScores = document.querySelector('.clear-scores');
let user = document.querySelector('.user');

// Result Page

let resultDiv = document.querySelector('.result-div');
let resultText = document.querySelector('.result-text');
let resultTextTwo = document.querySelector('.resultText-two');
let scoreText = document.querySelector('.score-text');
let restartButton = document.querySelector('.restart-button');
let exitGame = document.querySelector('.exit-game');
let exitDiv = document.querySelector('.exit-div');


// General Function Access


let score;
let totalScore = {botScore: 0, playerScore: 0};
let name = inputTag.value;
let buttonsClick = 0;
let numberFormat = /[^\d]/g;
let nameFormat = /^[A-Za-z]+$/;


// Landing Page

// Clears Warning

function clearThrowText(){
 throwText.style.display = 'none';
}

//Input Checker

let validInput = () => {
 
if(inputTag.value.match(nameFormat)){
 inputTag.style.borderColor = '#FFFF00';
 throwTextTwo.textContent = '';
}

else{
 inputTag.style.borderColor = 'red';
}

}


//Start Game Function


startGame.onclick = () => {
 
 
 if (inputTag.value && inputTag.value.length <= 15 && inputTag.value.match(nameFormat)) {
  
  alert("Here's a little info about the game...                                              It's a simple game where Rock beats Scissors, Paper beats Rock and Scissors beats Paper. You'll be playing against a bot. Results will be calculated on the sixth round (There are five rounds in total). Be sure to have fun.");
  
  mainContainer.classList.add('activeMainContainer');
  landingPage.style.display = 'none';
  
 } 
 
 else if(inputTag.value && inputTag.value.length > 15){
  throwTextTwo.textContent = 'Input Less Than 15 Characters!';
  inputTag.style.borderColor = 'red';
 }
 
 else if(inputTag.value.match(numberFormat)){
  inputTag.style.borderColor = 'red';
 }

 else{
  throwText.textContent = 'Required Field!';
  inputTag.style.borderColor = 'red';
 }
 
 
let firstLetterSlice = inputTag.value.slice(0,1).toUpperCase();
let secondLetterSlice = inputTag.value.slice(1, inputTag.value.length).toLowerCase();
let concat = firstLetterSlice + secondLetterSlice;

playerName.textContent = concat;
playerScoreTag.textContent = `${concat}: 0`;

 }
 
 

// Rock-Paper-Scissors Page


// Getting Bot's Choice

let getBotChoice = () => {
 
 let rockPaperScissors = ['✊', '✋', '✌️']
 
 let randomChoice = Math.floor(Math.random() * rockPaperScissors.length);
 
 botChoice.textContent =  rockPaperScissors[randomChoice];
 
}





//Results Function

let resultTextScore = () => {
 
let firstLetterSlice = inputTag.value.slice(0,1).toUpperCase();
let secondLetterSlice = inputTag.value.slice(1, inputTag.value.length).toLowerCase();
let concat = firstLetterSlice + secondLetterSlice;

buttonsClick ++;
  
  if(buttonsClick > 5){
   
  mainContainer.classList.remove('activeMainContainer');
  resultDiv.classList.add('activeResultDiv');
   resultPage();
   return;
   
  }

if (playerChoice.textContent == '✊' && botChoice.textContent == '✌️'){
 
 
 
 resultPTag.textContent = `${concat}'s Rock wins!`;
 score = 1;
 let finalPlayerScore = totalScore['playerScore'] += score;
 playerScoreTag.textContent = `${concat}: ${finalPlayerScore}`;
}

else if (playerChoice.textContent == '✋' && botChoice.textContent == '✊'){
 
 
 resultPTag.textContent = `${concat}'s Paper wins!`;
 score = 1;
 let finalPlayerScore = totalScore['playerScore'] += score;
 playerScoreTag.textContent = `${concat}: ${finalPlayerScore}`;
 
}

else if (playerChoice.textContent == '✌️' && botChoice.textContent == '✋'){
 
 
 resultPTag.textContent = `${concat}'s Scissors wins!`;
 score = 1;
 let finalPlayerScore = totalScore['playerScore'] += score;
 playerScoreTag.textContent = `${concat}: ${finalPlayerScore}`;
 
} 

else if (botChoice.textContent == '✊' && playerChoice.textContent == '✌️'){
 
 
 resultPTag.textContent = `Bot's Rock wins!`;
 score = 1;
 let finalBotScore = totalScore['botScore'] += score;
 botScoreTag.textContent = `Bot: ${finalBotScore}`;
 
} 

else if(botChoice.textContent == '✋' && playerChoice.textContent == '✊'){


 resultPTag.textContent = `Bot's Paper wins!`;
 score = 1;
 let finalBotScore = totalScore['botScore'] += score;
 botScoreTag.textContent = `Bot: ${finalBotScore}`;
 
}

else if(botChoice.textContent == '✌️' && playerChoice.textContent == '✋'){
 
 
 resultPTag.textContent = `Bot's Scissors wins!`;
 score = 1;
 let finalBotScore = totalScore['botScore'] += score;
 botScoreTag.textContent = `Bot: ${finalBotScore}`;
} 

else if (playerChoice.textContent == botChoice.textContent){
 resultPTag.textContent = `It's a tie!`;
}


}


// Display Area Background color change

 const bColor = () => {
 if(playerChoice.textContent == '✌️'){
  playerChoice.style.backgroundColor = 'green';
  playerChoice.style.borderColor = 'green';
 }
 if(playerChoice.textContent == '✋'){
  playerChoice.style.backgroundColor = 'white';
  playerChoice.style.borderColor = 'white';
 }
 if(playerChoice.textContent == '✊'){
  playerChoice.style.backgroundColor = '#041562';
  playerChoice.style.borderColor = '#041562';
 }
 if(botChoice.textContent == '✌️'){
  botChoice.style.backgroundColor = 'green';
  botChoice.style.borderColor = 'green';
 }
 if(botChoice.textContent == '✋'){
  botChoice.style.backgroundColor = 'white';
  botChoice.style.borderColor = 'white';
 }
 if(botChoice.textContent == '✊'){
  botChoice.style.backgroundColor = '#041562';
  botChoice.style.borderColor = '#041562';
 }
}


// When rockPaperScissors Buttons are clicked

buttons.forEach(button => {
 button.onclick = () => {
  
  playerChoice.textContent = button.value;
  
  getBotChoice();
  resultTextScore();
  bColor();
  
 }
 
})


// Clear Scores Function

clearScores.onclick = () => {
 
let firstLetterSlice = inputTag.value.slice(0,1).toUpperCase();
let secondLetterSlice = inputTag.value.slice(1, inputTag.value.length).toLowerCase();
let concat = firstLetterSlice + secondLetterSlice;

score = 0;
let finalPlayerScore = totalScore['playerScore'] = score;
playerScoreTag.textContent = `${concat}: ${finalPlayerScore}`;
let finalBotScore = totalScore['botScore'] = score;
botScoreTag.textContent = `Bot: ${finalBotScore}`;

 
 botChoice.textContent = '';
 playerChoice.textContent = '';
 resultPTag.textContent = 'Rock, Paper or Scissors?';
 botChoice.style.backgroundColor = 'white';
 botChoice.style.borderColor = 'white';
 playerChoice.style.backgroundColor = 'white';
 playerChoice.style.borderColor = 'white';
 
 let clearScore = 0;
 
 clearScore++
 
 if(clearScore >= 1){
  clearScores.style.pointerEvents = 'none';
  alert('You have only a chance to clear all...');
 }
}


// Result Div

let resultPage = () => {
 
  let firstLetterSlice = inputTag.value.slice(0,1).toUpperCase();
let secondLetterSlice = inputTag.value.slice(1, inputTag.value.length).toLowerCase();
let concat = firstLetterSlice + secondLetterSlice;

 
 if (totalScore['playerScore'] > totalScore['botScore']){
  
  if(totalScore.botScore >= 2){
   
  
  resultText.textContent = `${concat} Wins!🥳`;
  resultTextTwo.textContent = '';
  scoreText.innerHTML = `<strong>${concat}</strong> has a total of <strong>${totalScore.playerScore}</strong> points while <strong>Bot</strong> has a total of <strong>${totalScore.botScore}</strong> points.`;
  
  resultDiv.style.width = '80vw';
  resultDiv.style.height = '45vw';
  exitDiv.style.marginTop = '18px';
  resultDiv.style.padding = '20px 20px 7px 20px';
  }
  
  else if(totalScore.playerScore == 1){
   
  
  resultText.textContent = `${concat} Wins!🥳`;
  resultTextTwo.textContent = '';
  scoreText.innerHTML = `<strong>${concat}</strong> has a total of <strong>${totalScore.playerScore}</strong> point while <strong>Bot</strong> has a total of <strong>${totalScore.botScore}</strong> point.`;
  
  resultDiv.style.width = '80vw';
  resultDiv.style.height = '45vw';
  exitDiv.style.marginTop = '18px';
  resultDiv.style.padding = '20px 20px 7px 20px';
  } 
  
  else{
   
   
  resultText.textContent = `${concat} Wins!🥳`;
  resultTextTwo.textContent = '';
  scoreText.innerHTML = `<strong>${concat}</strong> has a total of <strong>${totalScore.playerScore}</strong> points while <strong>Bot</strong> has a total of <strong>${totalScore.botScore}</strong> point.`;
  
  resultDiv.style.width = '80vw';
  resultDiv.style.height = '45vw';
  exitDiv.style.marginTop = '18px';
  resultDiv.style.padding = '20px 20px 7px 20px';

  }
  
  
 }else if(totalScore['botScore'] > totalScore['playerScore']){
  
  if(totalScore.playerScore >= 2){
   
  
  resultText.textContent = `${concat} Lost!`;
  resultTextTwo.textContent = '';
  scoreText.innerHTML = `<strong>Bot</strong> has a total of <strong>${totalScore.botScore}</strong> points while <strong>${concat}</strong> has a total of <strong>${totalScore.playerScore}</strong> points.`;
  
  resultDiv.style.width = '80vw';
  resultDiv.style.height = '46vw';
  exitDiv.style.marginTop = '20px';
  resultDiv.style.padding = '15px 20px 7px 20px';
  }
  
  else if(totalScore.botScore == 1){
   
  
  resultText.textContent = `${concat} Lost!`;
  resultTextTwo.textContent = '';
  scoreText.innerHTML = `<strong>Bot</strong> has a total of <strong>${totalScore.botScore}</strong> point while <strong>${concat}</strong> has a total of <strong>${totalScore.playerScore}</strong> point.`;
  
  resultDiv.style.width = '80vw';
  resultDiv.style.height = '46vw';
  exitDiv.style.marginTop = '20px';
  resultDiv.style.padding = '15px 20px 7px 20px';
   
  } else{
   
  
  resultText.textContent = `${concat} Lost!`;
  resultTextTwo.textContent = '';
  scoreText.innerHTML = `<strong>Bot</strong> has a total of <strong>${totalScore.botScore}</strong> points while <strong>${concat}</strong> has a total of <strong>${totalScore.playerScore}</strong> point.`;
  
  resultDiv.style.width = '80vw';
  resultDiv.style.height = '46vw';
  exitDiv.style.marginTop = '20px';
  resultDiv.style.padding = '15px 20px 7px 20px';
   
  }
  
 }
  else{
   resultTextTwo.textContent = "It's a Tie!";
   resultText.textContent = '';
   scoreText.textContent = '';
   resultDiv.style.width = '60vw';
   resultDiv.style.height = '35vw';
   resultDiv.style.paddingTop = '0';
   resultDiv.style.paddingBottom = '10px';
   exitDiv.style.marginTop = '40px';
  }
 
 
}


// Restart Button Onclick

restartButton.onclick = () => {
 
 
 resultDiv.classList.remove('activeResultDiv');
 mainContainer.classList.add('activeMainContainer');
 
botChoice.textContent = '';
playerChoice.textContent = '';

score = 0;
let newPlayerScore = totalScore.playerScore = score;
let newBotScore = totalScore.botScore = score;

let firstLetterSlice = inputTag.value.slice(0,1).toUpperCase();
let secondLetterSlice = inputTag.value.slice(1, inputTag.value.length).toLowerCase();
let concat = firstLetterSlice + secondLetterSlice;

botScoreTag.textContent = `Bot: ${newBotScore}`;
playerScoreTag.textContent = `${concat}: ${newPlayerScore}`; 
resultPTag.textContent = 'Rock, Paper or Scissors?';

buttonsClick = 0;
clearScores.style.pointerEvents = 'auto';

botChoice.style.backgroundColor = 'white';
botChoice.style.borderColor = 'white'; playerChoice.style.backgroundColor = 'white';
playerChoice.style.borderColor = 'white';
 
}


// Exit Game Onclick

exitGame.onclick = () => {
 window.location.reload();
}








































































































































































































































































