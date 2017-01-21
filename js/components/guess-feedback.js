import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from '../store';

class GuessFeedback extends Component {
  constructor(props){
    super(props);
    console.log(props)
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
      <div className= "list-group col-sm-4">
        <ul>
          <h3>Number of Guesses: </h3>
          <p>{this.state.guesses.length}</p>
        </ul>
        <ul>
          <h3>Numbers Guessed: </h3>
          {this.renderGuessesList()}
        </ul>
      </div>
    );
  }
};

export default connect()(GuessFeedback);
