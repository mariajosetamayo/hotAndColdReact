import * as actions from '../actions/index';

const initialGameState = {
  randomNumber: null,
  guesses: []
}

export const hotColdReducer = (state = initialGameState, action) =>{
  if (action.type === actions.RESET_GAME){
    const newGameObject = Object.assign({}, state, {randomNumber: Math.floor(Math.random() * 100) + 1})
    return newGameObject
  }
  else if (action.type === actions.NEW_USER_GUESS){
    console.log('this is the guess', action.guess)
    const lastElementOfGuessesArray = state.guesses[state.guesses.length - 1]
    console.log('this is the current guess index', lastElementOfGuessesArray)
    const before = state.guesses.slice(0, lastElementOfGuessesArray)
    console.log('this is the array before', before)
    const updatedGameObject = Object.assign({}, state, {guesses: [...before, action.guess]})
    console.log('this is the new array', updatedGameObject)
    return updatedGameObject
  }
  return state;
};
