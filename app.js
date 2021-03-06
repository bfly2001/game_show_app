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
  let phraseCharacters = phraseRandom.split('');
  console.log(phraseCharacters);
  return phraseCharacters;
}

//calls getRandomPhraseAsArray function
getRandomPhraseAsArray(phrases);

//calls function
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//addPhraseToDisplay function
function addPhraseToDisplay(phraseArray) {
  for (i = 0; i < phraseArray.length; i++) {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(phraseArray[i]);
    node.classList.add('letter');
    node.appendChild(textnode);
    document.querySelector('#phrase ul').appendChild(node);
      if(phraseArray[i] === " ") {
        node.classList.remove('letter');
        node.classList.add('space');
        //node.style.backgroundColor = 'white';
        //node.style.display = 'inline-block'
      }
    document.querySelector('li').style.display = 'inline-block';
      }
  }

  function checkLetter(button) {
    let letters = document.getElementsByClassName('letter');
    let match = null;
    for (i = 0; i < letters.length; i++) {
      if (letters[i].textContent === button) {
        letters[i].classList.add('show');
        match = true;
      }
    }
    return match;
  }

function checkWin() {
  let numberShown = document.getElementsByClassName('show').length;
  let numberLetters = document.getElementsByClassName('letter').length;
  let misses = document.getElementsByClassName('tries').length;
  let overlay = document.getElementById('overlay');
  var retryButton = document.createElement('input');
    retryButton.setAttribute('type', 'button');
    retryButton.setAttribute('name', 'Retry');
    retryButton.setAttribute('value', 'Retry');
  console.log(misses);
  if (numberShown == numberLetters) {
    overlay.classList.add('win');
    overlay.innerHTML = 'YOU WIN!';
    overlay.style.display = 'inline-block';
    overlay.appendChild(retryButton);
    retryButton.onclick = function() {
      location.reload(true);
    }
    retryButton.style.fontSize = '100%';
    retryButton.style.margin = 'auto';
    retryButton.style.display = 'block';
  } else if (misses == 0) {
      overlay.classList.add('lose');
      overlay.innerHTML = 'TRY AGAIN!';
      overlay.style.display = 'inline-block';
      overlay.appendChild(retryButton);
      retryButton.onclick = function() {
        location.reload(true);
      }
      retryButton.style.fontSize = '100%';
      retryButton.style.margin = 'auto';
      retryButton.style.display = 'block';

  }
}

let button = document.body.addEventListener('click', event => {
  if (event.target.nodeName == 'BUTTON') {
    console.log('Clicked', event.target.textContent);
    event.target.classList.add('chosen');
    event.target.setAttribute('disabled', true);
    button = event.target.textContent;
    let letterFound = checkLetter(button);
    //return letterFound;
    if (letterFound == null) {
      let elem = document.getElementsByClassName('tries')[0];
      elem.remove();
    }
  }
  checkWin();
});
