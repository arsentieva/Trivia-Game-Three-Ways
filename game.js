import { getClue as getClueFromCallback } from "./callback-version.js";
import { getClue as getClueFromPromise } from "./promise-version.js";
import { getClue as getClueFromAsyncFunction } from "./async-await-version.js";

let score = 0;
window.addEventListener("DOMContentLoaded", (event) => {
  const cbBtn = document.getElementById("use-callback");
  const promiseBtn = document.getElementById("use-promise");
  const asyncBtn = document.getElementById("use-async-await");
  const checkResponseBtn = document.getElementById("check-response");
  const playerResponse = document.getElementById("player-response");

  const questionDiv = document.getElementById("question");
  const answerDiv = document.getElementById("answer");
  const valueDiv = document.getElementById("value");
  const catTitleDiv = document.getElementById("category-title");
  const invalidCountDiv = document.getElementById("invalid-count");

  checkResponseBtn.addEventListener("click", (event) => {
    let enteredResponse = playerResponse.value.trim();

    if (enteredResponse === answerDiv.innerHTML.trim()) {
      score += valueDiv.innerHTML;
    } else {
      score -= valueDiv.innerHTML;
    }

    answerDiv.classList.remove("is-hidden");
    checkResponseBtn.classList.add("is-hidden");
  });

  cbBtn.addEventListener("click", (event) => {
    getClueFromCallback((error, clue) => {
      if (error !== null) {
        return console.error(error);
      }
      setUIFromClue(clue);
    });
    reset();
  });

  promiseBtn.addEventListener("click", (event) => {
    getClueFromPromise()
      .then((clue) => {
        setUIFromClue(clue);
      })
      .catch((reason) => console.error(reason));
    reset();
  });

  asyncBtn.addEventListener("click", async () => {
    try {
      let clue = await getClueFromAsyncFunction();
      setUIFromClue(clue);
    } catch (error) {
      console.error(error.message);
    }
    reset();
  });

  function setUIFromClue(clue) {
    questionDiv.innerHTML = clue.question;
    answerDiv.innerHTML = clue.answer;
    valueDiv.innerHTML = clue.value;
    catTitleDiv.innerHTML = clue.category.title;
    if (clue.invalidCount > 0) {
      invalidCountDiv.innerHTML = "invalid";
    } else {
      invalidCountDiv.innerHTML = "valid";
    }
  }

  function reset() {
    answerDiv.classList.add("is-hidden");
    checkResponseBtn.classList.remove("is-hidden");
    playerResponse.value = "";
  }
});
