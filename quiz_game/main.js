function check() {
  let question1 = document.quiz.question1.value;
  let question2 = document.quiz.question2.value;
  let question3 = document.quiz.question3.value;
  let correct = 0;

  if (question1 == "Providence") {
    correct++;
  }
  if (question2 == "Hartford") {
    correct++;
  }
  if (question3 == "Albany") {
    correct++;
  }
  let messages = [
    "Great Job!",
    " That's just okay",
    "You really need to do better"
  ];
  let pictures = ["img/mario.png", "img/jumpy.png", "img/donkin.png"];
  let range;
  if (correct < 1) {
    range = 2;
  }
  if (correct > 0 && correct < 3) {
    range = 1;
  }
  if (correct > 2) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML =
    " You got " + correct + " correct. ";
  document.getElementById("picture").src = pictures[range];
}
