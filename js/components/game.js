import React, {Component} from 'react';

import GuessForm from '../components/guess-form'

export default class Game extends Component {
  render(){
    return(
      <div>
        <GuessForm />
      </div>
    );
  }
}
