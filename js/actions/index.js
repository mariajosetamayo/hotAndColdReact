import isomorphicFetch from 'isomorphic-fetch';


export const NEW_USER_GUESS = 'NEW_USER_GUESS';
export const newUserGuess = (guess) => ({
  type: NEW_USER_GUESS,
  guess: guess
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME
});

export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (fewestGuesses) => ({
  type: FETCH_FEWEST_GUESSES_SUCCESS,
  fewestGuesses: fewestGuesses
});

export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = (guesses, error) => ({
  type: FETCH_FEWEST_GUESSES_ERROR,
  guesses,
  error
});

export const fetchFewestGuesses = guesses => dispatch => {
  const url = 'http://localhost:8090/fewest-guesses';
  return fetch(url).then(response => {
    if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
    }
    return response
  })
  .then(response => response.json())
  .then(data =>
    dispatch(fetchFewestGuessesSuccess(data))
  )
  .catch(error => {
    dispatch(fetchFewestGuessesError(error))
  })
};

export const saveFewestGuesses = guessCount => dispatch => {
  const url = 'http://localhost:8090/fewest-guesses'
  return fetch(url, {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      guessCount: guessCount
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
      console.log('this is the response', response)
      return response.json();
    })
    .then(data => {
      console.log('this is the data', data)
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
