export const SHOW_INSTRUCTIONS = 'SHOW_INSTUCTIONS';
export const showInstructions = instructions => ({
  type: SHOW_INSTRUCTIONS,
  instructions
});

export const HIDE_INSTRUCTIONS = 'HIDE_INSTRUCTIONS';
export const hideInstructions = (guessForm) => ({
  type: HIDE_INSTRUCTIONS,
  guessForm
});

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = number => ({
  type: GUESS_NUMBER,
  number
});

export const NEW_RANDOM_NUMBER = 'NEW_RANDOM_NUMBER';
export const newRandomNumber = number => ({
  type: NEW_RANDOM_NUMBER,
  number
});

export const UPDATE_GUESS_PROMPT = 'UPDATE_GUESS_PROMPT';
export const updateGuessPrompt = prompt => ({
  type: 'UPDATE_GUESS_PROMPT',
  prompt
});

export const UPDATE_NUMBER_OF_GUESSES = 'UPDATE_NUMBER_OF_GUESSES';
export const updateNumberOfGuesses = numberOfGuesses => ({
  type: 'UPDATE_NUMBER_OF_GUESSES',
  numberOfGuesses
});

export const UPDATE_NUMBERS_GUESSED = 'UPDATE_NUMBERS_GUESSED';
export const updateNumbersGuessed = numbersGuessed => ({
  type: 'UPDATE_NUMBERS_GUESSED',
  numbersGuessed
});
