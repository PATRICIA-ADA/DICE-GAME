//Elements from html
let finalScore0 = document.querySelector('#finalScore0');
let finalScore1 = document.querySelector('#finalScore1');
let displaydices = document.querySelector('.displaydices');
let rollDice = document.querySelector('.rollDice');
const clickToHoldScore = document.querySelector('.clickToHoldScore');
const refreshGame = document.querySelector('.refreshGame');
let RolledDiceScore1 = document.querySelector('.RolledDiceScore1');
let RolledDiceScore2 = document.querySelector('.RolledDiceScore2');
let game1 = document.querySelector('.game1');
let game2 = document.querySelector('.game2');
let ShowRolledDice0 = document.querySelector('.ShowRolledDice0');
let ShowRolledDice1 = document.querySelector('.ShowRolledDice1');
let displayWinner0 = document.querySelector('.displayWinner0');
let displayWinner1 = document.querySelector('.displayWinner1');

let The2FinalScores, currentScore, activePlayer, playing;
//starting conditions
const initialAndRefresh = function(){
  The2FinalScores =  [0,0];//you assign both finalscores into arrays
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  finalScore0.textContent = 0;
  finalScore1.textContent = 0;
  RolledDiceScore1.textContent = 0;
  RolledDiceScore2.textContent = 0;

  displaydices.classList.add('hidden');
  game1.classList.remove('playerWinner');
  game2.classList.remove('playerWinner');
  game1.classList.add('gameActive');
  game2.classList.remove('gameActive');
}

initialAndRefresh();

let switchOver = function(){
  document.getElementById(`RolledDiceScore${activePlayer}`).textContent = 0;
  currentScore = 0

  activePlayer = activePlayer === 0 ? 1 : 0; 
  game1.classList.toggle('gameActive');
  game2.classList.toggle('gameActive');
}


//Rolling dice functionality
rollDice.addEventListener('click', function(){
  if(playing){
//Generating a random dice roll
const randomRolledDice = Math.trunc(Math.random() * 6) + 1;

//Display dice
displaydices.classList.remove('hidden');
displaydices.src = `dice-${randomRolledDice}.png`;

//check if rolled 1? if true, switch to next player
if(randomRolledDice !== 1){
  //Add randomRolledDice to the current score
  currentScore += randomRolledDice;
  //RolledDiceScore1.textContent = currentScore.   //change later bcos we have to select it dynamically depending on whosoever is the active player i.e ability to apply it to both players
  document.getElementById(`RolledDiceScore${activePlayer}`).textContent = currentScore;
}
else{//Switch to next player by reassigning the active player variable.

    //reset the currentScore back to zero and textcontent of the active player
 /*  document.getElementById(`RolledDiceScore${activePlayer}`).textContent = 0;
  currentScore = 0

  activePlayer = activePlayer === 0 ? 1 : 0; //if the activePlayer is 1(player1) then the new active player to be 2(player2) or else 1(return to player1)

  //reset the bg color to active player
  game1.classList.toggle('gameActive');
  game2.classList.toggle('gameActive'); */

  switchOver();
}
  }
})

//SET TO HOLD SCORE
clickToHoldScore.addEventListener('click',function(){
  if(playing){
//Add current score to active player's score, then display it.
The2FinalScores[activePlayer] += currentScore; //this means The2FinalScores[1] = The2FinalScores[1] + currentScore;
document.getElementById(`finalScore${activePlayer}`).textContent = The2FinalScores[activePlayer];

//Check if player's score is >=100
if(The2FinalScores[activePlayer] >= 100){
//finish the game by changing color

playing = false;
document.querySelector(`.play${activePlayer}`).classList.add('playerWinner')

 document.querySelector(`.play${activePlayer}`).classList.remove('gameActive');
 
 //remove the dice from screen
 displaydices.classList.add('hidden');

 //write up for the winner
 document.querySelector(`.displayWinner${activePlayer}`).classList.remove('hideWinner');

 /* displayWinner0.classList.remove('hideWinner');
 ShowRolledDice0.classList.toggle('showRolledDice');

 displayWinner1.classList.remove('hideWinner');
 ShowRolledDice1.classList.toggle('showRolledDice'); */
}
else{
//Switch to the next player
switchOver();
}
}
})

//SET TO RESTART THE GAME
refreshGame.addEventListener('click',function(){
  initialAndRefresh();

  document.querySelector('.displayWinner0').classList.add('hideWinner');
  document.querySelector('.displayWinner1').classList.add('hideWinner');
  /* displayWinner0.classList.add('hideWinner');
 ShowRolledDice0.classList.toggle('showRolledDice');

 displayWinner1.classList.add('hideWinner');
 ShowRolledDice1.classList.toggle('showRolledDice'); */

 /*  document.querySelector(`.ShowRolledDice${activePlayer}`).textContent = 'Current:';

  document.getElementById(`RolledDiceScore${activePlayer}`).textContent = 0; */
  
} )





//My drafted psuedo code
//design the dice card
//get the document from html.
//set the random math and displaying it according to the designed dice card
//holding the score by updating it to the current score
//Then switching over to the next player once the hold is placed.

//document from Html:


/* let rollDice = document.querySelector('.rollDice');

const clickToHoldScore = document.querySelector('.clickToHoldScore');

const refreshGame = document.querySelector('.refreshGame');

let displaydices = document.querySelector('.displaydices');

let num1a = document.querySelector('.num1a');
let num2a = document.querySelector('.num2a');
let num2b = document.querySelector('.num2b');

let num3a = document.querySelector('.num3a');
let num3b = document.querySelector('.num3b');
let num3c = document.querySelector('.num3c');

let num4a = document.querySelector('.num4a');
let num4b = document.querySelector('.num4b');
let num4c = document.querySelector('.num4c');
let num4d = document.querySelector('.num4d');

let num5a = document.querySelector('.num5a');
let num5b = document.querySelector('.num5b');
let num5c = document.querySelector('.num5c');
let num5d = document.querySelector('.num5d');
let num5e = document.querySelector('.num5e');

let num6a = document.querySelector('.num6a');
let num6b = document.querySelector('.num6b');
let num6c = document.querySelector('.num6c');
let num6d = document.querySelector('.num6d');
let num6e = document.querySelector('.num6e');
let num6f = document.querySelector('.num6f'); */


/* for(i = 1; i<randomRolledDice.length;i++) randomRolledDice[i]; */
/* for(i=0; i<rollDice; i++){
  rollDice[i]
} */
/* let showRolledDice = 0;
rollDice.addEventListener('click', function(){
  //set the random math;
//const randomRolledDice = Math.trunc(Math.random() * 6) + 1;

  rollDice = randomRolledDice;
  const displayRolledDice1 = document.querySelector('.displayRolledDice1').textContent = rollDice;

  if(rollDice === 1){
    displaydices.classList.remove('hidden');
      num1a.classList.remove('hidden');
  }
  else if(rollDice === 2){
    displaydices.classList.remove('hidden');
      num2a.classList.remove('hidden');
      num2b.classList.remove('hidden');
  }
  else if(rollDice === 3){
    displaydices.classList.remove('hidden');
      num3a.classList.remove('hidden');
      num3b.classList.remove('hidden');
      num3c.classList.remove('hidden');
  }
  else if(rollDice === 4){
    displaydices.classList.remove('hidden');
      num4a.classList.remove('hidden');
      num4b.classList.remove('hidden');
      num4c.classList.remove('hidden');
      num4d.classList.remove('hidden');
  }
  else if(rollDice === 5){
    displaydices.classList.remove('hidden');
      num5a.classList.remove('hidden');
      num5b.classList.remove('hidden');
      num5c.classList.remove('hidden');
      num5d.classList.remove('hidden');
      num5e.classList.remove('hidden');
  }
  else if(rollDice === 6){
    displaydices.classList.remove('hidden');
      num6a.classList.remove('hidden');
      num6b.classList.remove('hidden');
      num6c.classList.remove('hidden');
      num6d.classList.remove('hidden');
      num6e.classList.remove('hidden');
      num6f.classList.remove('hidden');
  }
  else{
    showRolledDice = 0;
    displaydices.classList.add('hidden');
  }

});

clickToHoldScore.addEventListener('click', function(){
  const finalScore = document.querySelector('.finalScore1').textContent= rollDice;

}) */




