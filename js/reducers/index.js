import * as actions from '../actions/index';

const initialGameState = [];

export const hotColdReducer = (state = initialGameState, action) =>{
  if (action.type === actions.NEW_USER_GUESS){
    return [...state,{
        randomNumber: action.randomNumber,
        guessesArray: [action.guessesArray]
    }]
  }
  else if (action.type === actions.RESET_GAME){
    return [...state,{
      randomNumber: action.randomNumber,
      guessesArray:[]
    }]
  }
  return state;
};
