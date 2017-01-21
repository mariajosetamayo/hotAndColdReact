import React, {Component} from 'react';

import GuessForm from '../components/guess-form';
import GuessFeedback from '../components/guess-feedback';
import NewGame from '../components/new-game';

export default class Game extends Component {  
  render(){
    return(
      <div>
        <NewGame />
        <div className= 'jumbotron col-md-6'>
          <GuessForm />
          <GuessFeedback />
        </div>
      </div>
    );
  }
}
