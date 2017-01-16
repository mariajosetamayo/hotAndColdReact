import * actions from '../actions/index';

const initialGameState = [];

export const gameReducer = (state = initialGameState, action) =>
  if (action.type === actions.GUESS_NUMBER){
      return [...state,{
        
      }]
  }
  else if (action.type === actions.NEW_RANDOM_NUMBER){

  }
  return state;
};
