require('babel-polyfill');

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
//
// import store from './store';
// import Game from './components/game';
//
// document.addEventListener('DOMContentLoaded', () =>
//   ReactDOM.render( <Provider store = {store}>
//             <Game />
//           </Provider>,
//           document.getElementById('app')
//   )
// );

import * as actions from './actions/index';
import * as reducers from './reducers/index';
import store from './store';

store.dispatch(actions.newUserGuess(5));
store.dispatch(actions.newUserGuess(6));
store.dispatch(actions.resetGame())
// store.dispatch(actions.newUserGuess([3,5,7]));
// store.dispatch(actions.resetGame(2))
console.log(store.getState());
