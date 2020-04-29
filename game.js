import { getClue as getClueFromCallback } from "./callback-version.js";
window.addEventListener("DOMContentLoaded", (event) => {
  const cbBtn = document.getElementById("use-callback");
  const questionDiv = document.getElementById("question");
  const answerDiv = document.getElementById("answer");
  const valueDiv = document.getElementById("value");
  const catTitleDiv = document.getElementById("category-title");
  const invalidCountDiv = document.getElementById("invalid-count");

  cbBtn.addEventListener("click", (event) => {
    getClueFromCallback((error, clue) => {
      if (error !== null) {
        return console.error(error);
      }
      questionDiv.innerHTML = clue.question;
      answerDiv.innerHTML = clue.answer;
      valueDiv.innerHTML = clue.value;
      catTitleDiv.innerHTML = clue.category.title;
      if (clue.invalidCount > 0) {
        invalidCountDiv.innerHTML = "invalid";
      } else {
        invalidCountDiv.innerHTML = "valid";
      }
    });
  });
});
