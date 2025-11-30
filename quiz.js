const feedback = document.getElementById("feedback");

function checkAnswer() {
  const correctAnswer = "4";
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  /*if (userAnswer == correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }*/

  feedback.textContent =
    userAnswer == correctAnswer
      ? "Correct! Well done."
      : "That's incorrect. Try again!";
}
