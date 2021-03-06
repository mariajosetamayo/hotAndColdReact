import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

class GuessForm extends Component {
  constructor (props){
    super(props);
    console.log(props)
    this.onInputChange = this.onInputChange.bind(this);
  }


  onInputChange (){
    const guess = this.newGuess.value;
    this.props.dispatch(actions.newUserGuess(guess));
    this.newGuess.value='';
  }


  render (){

    return(
      <div className="guessInput">
        <label>
          <h3>Guess a number between 0 and 100:</h3>
          <input ref={ref => this.newGuess = ref} />
        </label>
        <button type="button" className="btn btn-primary" onClick={ this.onInputChange}>Guess</button>

      </div>
    )
  }
}

export default connect ()(GuessForm);
