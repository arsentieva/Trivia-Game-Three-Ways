import getClueFromCallback from "./callback-version.js";
window.addEventListener("DOMContentLoaded", (event) => {
  let cbBtn = document.getElementById("use-callback");
  let questionDiv = document.getElementById("question");
  let answerDiv = document.getElementById("answer");
  let valueDiv = document.getElementById("value");
  let catTitleDiv = document.getElementById("category-title");

  cbBtn.addEventListener("click", (event) => {
    getClueFromCallback((error, clue) => {
      if (error !== null) {
        console.error(error);
      } else {
        questionDiv.innerHTML = clue.question;
        answerDiv.innerHTML = clue.answer;
        valueDiv.innerHTML = clue.value;
        catTitleDiv.innerHTML = clue.category.title;
      }
    });
  });
});
