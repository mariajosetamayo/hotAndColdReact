import isomorphicFetch from 'isomorphic-fetch';

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

export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (guesses, fewestGuesses) => ({
  type: FETCH_FEWEST_GUESSES,
  guesses,
  fewestGuesses
});

export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = (guesses, error) => ({
  type: FETCH_FEWEST_GUESSES_ERROR,
  guesses,
  error
});

export const fetchFewestGuesses = guesses => dispatch => {
  const url = `/fewest-guesses`;
  return fetch(url).then(response => {
    if (!response.ok){
      const error = new Error(response.statusText)
      error.response = response
      throw error;
    }
    return response
  })
  .then(response => response.json())
  .then(data =>
    dispatch(fetchFewestGuessesSuccess(data))
  )
  .catch(error =>
    dispatch(fetchFewestGuessesError(error))
  );
};

export const saveFewestGuesses = guess => dispatch => {
  const url = `/fewest-guesses`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      guess: guess
    })
  })
  .then(response => {
    if (response.status < 200 || response.status >= 300) {
      var error = new Error(response.statusText)
      error.response = response
      throw error;
    }
    return response;
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    return dispatch(
      fetchFewestGuessesSuccess(data)
    );
  })
  .catch(error => {
    return dispatch(
      fetchFewestGuessesError(error)
    )
  })
}
