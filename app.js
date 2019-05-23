//declared variables
const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;

//event listener to button
const x = document.querySelector('.btn__reset');
const y = document.getElementById('overlay');

x.addEventListener('click', RespondClick);

function RespondClick(){
  y.style.display = 'none';
}

// phrases array object
var phrases = ['see eye to eye', 'speak of the devil', 'when pigs fly',
 'once in a blue moon', 'piece of cake'];

//getRandomPhraseAsArray function

function getRandomPhraseAsArray(phrases){
  let phraseRandom = phrases[Math.floor(Math.random() * phrases.length)];
  let phraseArray = phraseRandom.split('');
}
//calls function
getRandomPhraseAsArray(phrases);

//addPhraseToDisplay function
function addPhraseToDisplay(){
  const node = document.createElement("LI");
  let textnode = document.createTextNode(phraseArray);
  node.appendChild(textnode);
  document.querySelector('#phrase ul').appendChild(node);
  document.querySelector('li').style.display = 'none';
}

//calls function
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
/*
//checkLetter function
function checkLetter('letter') {

  if(true){
    document.style.display = 'block';
  }
  else(false){
    return null;
  }
}

//add EventListener to keyboard

//count the missed guesses in the game

//create a checkWin function */
