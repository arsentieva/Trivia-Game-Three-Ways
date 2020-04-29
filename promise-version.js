export function getClue(cb) {
  const url = "https://jservice.xyz/api/random-clue";
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  });
}
