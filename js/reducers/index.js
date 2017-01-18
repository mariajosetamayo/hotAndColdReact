import * as actions from '../actions/index';

const initialGameState = [
  randomNumber: null,
  guessesArray: [],
  correctGuess: false
];

export const hotColdReducer = (state = initialGameState, action) =>{
  if (action.type === actions.NEW_USER_GUESS){
    return [...state,{
        randomNumber: action.randomNumber,
        guessesArray: action.guess
    }]
  }
  else if (action.type === actions.RESET_GAME){
    return [...state,{
      randomNumber: null,
      guessesArray: [],
      correctGuess: false
    }]
  }
  return state;
};
