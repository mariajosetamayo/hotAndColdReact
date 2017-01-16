
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = reponse => ({
  type: GUESS_NUMBER,
  reponse: {numberGuessed: 2, prompt: 'cold', numberOfGuesses: 2, numbersGuessed:[2]}
});

// export const UPDATE_GUESS_PROMPT = 'UPDATE_GUESS_PROMPT';
// export const updateGuessPrompt = prompt => ({
//   type: 'UPDATE_GUESS_PROMPT',
//   prompt
// });
//
// export const UPDATE_NUMBER_OF_GUESSES = 'UPDATE_NUMBER_OF_GUESSES';
// export const updateNumberOfGuesses = numberOfGuesses => ({
//   type: 'UPDATE_NUMBER_OF_GUESSES',
//   numberOfGuesses
// });
//
// export const UPDATE_NUMBERS_GUESSED = 'UPDATE_NUMBERS_GUESSED';
// export const updateNumbersGuessed = numbersGuessed => ({
//   type: 'UPDATE_NUMBERS_GUESSED',
//   numbersGuessed
// });

export const NEW_RANDOM_NUMBER = 'NEW_RANDOM_NUMBER';
export const newRandomNumber = number => ({
  type: NEW_RANDOM_NUMBER,
  number
});
