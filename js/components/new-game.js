import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

class NewGame extends Component {
  constructor (props){
    super(props);
    this.onNewGameButtonClick = this.onNewGameButtonClick.bind(this)
  }

  onNewGameButtonClick (){
    this.props.dispatch(actions.resetGame());
  }

  render (){
    return(
      <div className="titleContainer">
        <h1 className="title">Hot-n-Cold</h1>
        <button type="button" className="btn btn-primary playAgainBtn" onClick={this.onNewGameButtonClick}>Play again</button>
      </div>
    )
  }
}

export default connect ()(NewGame);
