import * as actions from '../actions/index';

const initialGameState = {
  randomNumber: Math.floor(Math.random() * 100) + 1,
  guesses: [],
  fewestGuesses: '',
  won: false
}

export const hotColdReducer = (state = initialGameState, action) =>{
  if (action.type === actions.RESET_GAME){
    const newGameObject = Object.assign({},{randomNumber:Math.floor(Math.random() * 100) + 1}, {guesses:[]}, {fewestGuesses:[]})
    return newGameObject
  }
  else if (action.type === actions.NEW_USER_GUESS){
    const before = state.guesses.slice(0)
    console.log('this is the array before', before)

    if(Number(action.guess) === state.randomNumber){
      console.log('this is actually running')
      const updatedGameObjectWon = Object.assign({}, state,{guesses: [...before, action.guess]}, {won: true})
      console.log('this is the update won', updatedGameObjectWon)
      return updatedGameObjectWon
    }
    else{
      const updatedGameObject = Object.assign({}, state,{guesses: [...before, action.guess]})
      console.log('this is the updatedGameObject', updatedGameObject)
      return updatedGameObject
    }
  }
  else if (action.type === actions.FETCH_FEWEST_GUESSES_SUCCESS){
    const before = state.fewestGuesses.slice(0);
    console.log('this happens after post', action.fewestGuesses)
    const updatedFewestGuessesObject = Object.assign({}, state, {fewestGuesses: [...before, action.fewestGuesses]})
    return updatedFewestGuessesObject
  }
  else if (action.type === actions.FETCH_FEWEST_GUESSES_ERROR) {
    console.log('reducer fewest guesses',state.fewestGuesses )
    if (state.fewestGuesses.length === 0){
      console.log('An error occurred: ' + action.error);
      return state;
    }
  }
  return state;
};
