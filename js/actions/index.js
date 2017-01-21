
export const NEW_USER_GUESS = 'NEW_USER_GUESS';
export const newUserGuess = (guess) => ({
  type: NEW_USER_GUESS,
  guess: guess
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = (randomNumber) => ({
  type: RESET_GAME,
  randomNumber: randomNumber
});
