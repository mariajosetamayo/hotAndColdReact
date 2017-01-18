
export const NEW_USER_GUESS = 'NEW_USER_GUESS';
export const newUserGuess = (randomNumber, guessesArray) => ({
  type: NEW_USER_GUESS,
  guess
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = (newRandomNumber, blankGuessesArray) => ({
  type: RESET_GAME,
  randomNumber: Math.round(Math.random() * 100),
  resetGame: true
});
