//declared variables
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;

//event listener to button
document.getElementsByClassName("btn__reset").addEventListener("click", function(){
  document.getElementById("overlay").style.display = "none";
});

// phrases array object
var phrases = ["see eye to eye", "speak of the devil", "when pigs fly",
 "once in a blue moon", "piece of cake"];
