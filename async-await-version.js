export async function getClue() {
  const url = "https://jservice.xyz/api/random-clue";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    return await response.json();
  }
}
