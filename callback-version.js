export function getClue(cb) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.addEventListener("readystatechange", (event) => {
    if (httpRequest.readyState !== XMLHttpRequest.DONE) {
      return;
    }

    if (httpRequest.status !== 200) {
      cb();
    } else {
      const response = JSON.parse(httpRequest.responseText);
      cb(null, response);
    }
  });

  httpRequest.open("GET", "https://jservice.xyz/api/random-clue");
  httpRequest.send();
}
