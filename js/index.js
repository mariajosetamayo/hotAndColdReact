require('babel-polyfill');

import * as actions from './actions/index';
import * as reducers from './reducers/index';
import store from './store';

store.dispatch(actions.newUserGuess(3,[1,2,3]));
store.dispatch(actions.newUserGuess(5,[3,5,7]));
store.dispatch(actions.resetGame(2))
console.log(store.getState());
