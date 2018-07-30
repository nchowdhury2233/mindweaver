function showAnswer1() {
  if (document.getElementById('answer1').style.display === "initial") {
    // set display to none
    document.getElementById('answer1').style.display = "none";
  } else {
    // set display to initial
    document.getElementById('answer1').style.display = "initial";
  }
}
function showAnswer2() {
  if (document.getElementById('answer2').style.display === "initial") {
    document.getElementById('answer2').style.display = "none";
  } else {
    document.getElementById('answer2').style.display = "initial";
  }
}
function showAnswer3() {
  document.getElementById('answer3').style.display = "initial";
}

document.getElementById('question1').onclick = showAnswer1;
document.getElementById('question2').onclick = showAnswer2;
document.getElementById('question3').onclick = showAnswer3;

// if element style is initial
// if (document.getElementById('answer1').style.display === "initial") {
//   // set display to none
//   document.getElementById('answer1').style.display = "none";
// } else {
//   // set display to initial
//   document.getElementById('answer1').style.display = "initial";
// }