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
      <div>
        <h1>Hot-n-Cold</h1>
        <button type="button" className="btn btn-primary" onClick={this.onNewGameButtonClick}>Play again</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  randomNumber: state.randomNumber
})

export default connect (mapStateToProps)(NewGame);
