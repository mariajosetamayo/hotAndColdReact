import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from '../store';
import * as actions from '../actions/index';

class GuessFeedback extends Component {
  constructor(props){
    super(props);
    console.log('these are the props', props)
    this.onChange = this.onChange.bind(this);
  }

  onChange (){
    if(this.props.state.won){
      this.props.dispatch(
        actions.saveFewestGuesses(this.props.state.guesses.length)
      )
    }
  }

  componentDidMount(){
    if(this.props.state.won && this.props.state.fewestGuesses.length !== 0){
      this.props.dispatch(
        actions.fetchFewestGuesses()
      )
    }
  }

  renderFeedback () {
    console.log('this is the props obejct', this.props.state.guesses)
    let guessFeedback;
    let currentGuess = Number(this.props.state.guesses.slice(-1))
    console.log('this is the guess', currentGuess)
    if(this.props.state.guesses.length === 0){
      guessFeedback = 'Feedback for your guess will display here';
    }
    else if (isNaN(currentGuess) || currentGuess > 100 ){
      guessFeedback = 'Please enter a number between 1 and 100';
    }
    else {
      const guessAndRandomNumberDifference = Math.abs(this.props.state.randomNumber - this.props.state.guesses.slice(-1));
      console.log('this is the difference', guessAndRandomNumberDifference)

      if ( guessAndRandomNumberDifference === 0 || this.props.state.won){
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
    return this.props.state.guesses.map((guess, index) =>{
      return(
        <li
          key={index}>
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
          <p className="guessesNumber">{this.props.state.guesses.length}</p>
        </ul>
        <ul>
          <h3>Numbers Guessed: </h3>
          <ul>
            {this.renderGuessesList()}
          </ul>
        </ul>
        <ul>
          <div><h3>Fewest Guesses</h3>
          <ul className="fewestGuesses">
            {this.props.state.fewestGuesses}
          </ul>
          </div>
        </ul>
        <ul>
          <button type="button" className="btn btn-primary" onClick={ this.onChange}>Fewest</button>
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  state: state
})

export default connect(mapStateToProps)(GuessFeedback);
