import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from '../store';
import * as actions from '../actions/index';

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
        guesses: store.getState().guesses,
        fewestGuesses: store.getState().fewestGuesses,
        won: store.getState().won
      });
    });
  }

  renderFeedback () {
    let guessFeedback;
    let currentGuess = Number(this.state.guesses.slice(-1))
    console.log('this is the guess', currentGuess)
    if(this.state.guesses.length === 0){
      guessFeedback = 'Feedback for your guess will display here';
    }
    else if (isNaN(currentGuess) || currentGuess > 100 ){
      guessFeedback = 'Please enter a number between 1 and 100';
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
      <h6 className="feedback">{guessFeedback}</h6>
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

  // componentDidMount(){
  //   this.props.dispatch(
  //     actions.fetchFewestGuesses(this.state.fewestGuesses)
  //   )
  // }
  //
  componentDidMount(){
    if(this.state.won === true){
      this.props.dispatch(
        actions.saveFewestGuesses(this.props.guesses.length)
      )
    }
  }

  render(){
    return (
      <div className= "list-group">
        <ul>
          <div><h3>Feedback</h3>{this.renderFeedback()}</div>
        </ul>
        <ul>
          <h3>Number of Guesses: </h3>
          <p className="guessesNumber">{this.state.guesses.length}</p>
        </ul>
        <ul>
          <h3>Numbers Guessed: </h3>
          <ul>
            {this.renderGuessesList()}
          </ul>
        </ul>
        <ul>
          <div><h3>Fewest Guesses</h3>{this.state.fewestGuesses}</div>
        </ul>
      </div>
    );
  }
};

export default connect()(GuessFeedback);
