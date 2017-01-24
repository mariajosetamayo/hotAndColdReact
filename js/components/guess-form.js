import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

class GuessForm extends Component {
  constructor (props){
    super(props);
    //test
    this.state = {
      haveIWon: false,
    }
    //test
    console.log(props)
    this.onInputChange = this.onInputChange.bind(this);
  }


  onInputChange (){
    const guess = this.newGuess.value;
    this.props.dispatch(actions.newUserGuess(guess));
    this.newGuess.value='';
  }

  onUserWon (){
    if(this.props.guesses.guesses.won){
      this.props.dispatch(
        actions.saveFewestGuesses(this.props.guesses.guesses.length)
      )
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const winner = this.props.guesses.won
    console.log ("INSIDE THE shouldComponentUpdate: we got STATE being ", this.state.haveIWon, "NEXTSTATE: ", nextState, " and PROP being ", winner, " NEXTPROP: ", nextProps)
    if(nextProps.guesses.won && !nextState.haveIWon){
      console.log("WE ARE CHANGING THE HAVEIWON")
      this.setState({
        haveIWon: true,
      })
      return true
    } else if (nextProps.guesses.won && nextState.haveIWon) {
      return false
    }
    return true
  }

  render (){
    //test
    // console.log('length of guesses', this.props.guesses.won)
    const winner = this.props.guesses.won
    console.log("HAVEIWON IS ", this.state.haveIWon, " AND PROP IS ", this.props.guesses.won)
    if(winner && !this.state.haveIWon){
      alert('you won the game')
      this.props.dispatch(
        actions.saveFewestGuesses(this.props.guesses.guesses.length)
      )
    }
    //test
    return(
      <div className="guessInput">
        <label>
          <h3>Guess a number between 0 and 100:</h3>
          <input ref={ref => this.newGuess = ref} />
        </label>
        <button type="button" className="btn btn-primary" onClick={this.onInputChange}>Guess</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  guesses: state
})


export default connect (mapStateToProps)(GuessForm);
