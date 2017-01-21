import React, {Component} from 'react';

import GuessForm from '../components/guess-form';
import GuessFeedback from '../components/guess-feedback';

export default class Game extends Component {
  render(){
    return(
      <div>
        <GuessForm />
        <GuessFeedback />
      </div>
    );
  }
}
