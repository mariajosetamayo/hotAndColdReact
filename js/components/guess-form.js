import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

class GuessForm extends Component {
  constructor (props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange (){
    const guess = this.newGuess.value;
    this.props.dispatch(actions.newUserGuess(guess));
    this.newGuess.value='';
  }

  render (){
    return(
      <div>
        <label>
          <h3>Guess a number between 0 and 100:</h3>
          <input ref={ref => this.newGuess = ref} />
        </label>
        <button type="button" className="btn btn-primary" onClick={this.onInputChange}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  guesses: state
})

export default connect (mapStateToProps)(GuessForm);
