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
    for (i = 0; i < letters[i].length; i++) {
      if (letters[i].textContent = button) {
        button.classList.add('show');
      } else {
        return null;
      }
    }
  }

let button = document.body.addEventListener('click', event => {
  if (event.target.nodeName == 'BUTTON') {
    console.log('Clicked', event.target.textContent);
    event.target.classList.add('chosen');
    event.target.setAttribute('disabled', true);
    button = event.target.textContent;
    let letterFound = checkLetter(button);
    return letterFound;
  }
});
