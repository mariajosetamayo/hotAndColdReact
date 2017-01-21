import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from '../store';

class GuessFeedback extends Component {
  constructor(props){
    super(props);

    this.state = {
      randomNumber: '',
      guesses: []
    }
    store.subscribe(() => {
      this.setState({
        randomNumber: store.getState().randomNumber,
        guesses: store.getState().guesses
      });
    });
  }

  renderFeedback () {
    let guessFeedback;
    if(this.state.guesses.length === 0){
      guessFeedback = 'Feedback for your guess will display here'
    }
    else {
      const guessAndRandomNumberDifference = Math.abs(this.state.randomNumber - this.state.guesses.slice(-1));
      console.log('this is the difference', guessAndRandomNumberDifference)

      if ( guessAndRandomNumberDifference === 0){
        guessFeedback = 'You won!'
      }
      else if (guessAndRandomNumberDifference < 5){
        guessFeedback = 'Hot';
      }
      else if (guessAndRandomNumberDifference <10){
        guessFeedback = 'Very Warm';
      }
      else if (guessAndRandomNumberDifference<20) {
        guessFeedback = 'Warm';
      }
      else {
        guessFeedback = 'Cold';
      }
    }
    return (
      <p>{guessFeedback}</p>
    )
  }

  renderGuessesList () {
    return this.state.guesses.map((guess) =>{
      return(
        <li
          key={guess}>
          {guess}
        </li>
      )
    })
  }

  render(){
    return (
      <div className= "list-group">
        <ul>
          <div><h3>Feedback</h3>{this.renderFeedback()}</div>
        </ul>
        <ul>
          <h3>Number of Guesses: </h3>
          <p>{this.state.guesses.length}</p>
        </ul>
        <ul>
          <h3>Numbers Guessed: </h3>
          <ul>
            {this.renderGuessesList()}
          </ul>
        </ul>
      </div>
    );
  }
};

export default connect()(GuessFeedback);
