//declared variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

//addition of event listener to button
document.getElementsByClassName("btn__reset").addEventListener("click", function(){
  document.getElementById("overlay").style.display = "none";
});
