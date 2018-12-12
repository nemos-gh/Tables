import React from 'react';
import ScoreApi from '../api';

class League extends React.Component {
  
  render() {
    const leagueCode = this.props.match.params.league;

    return (
      <div>
        <ScoreApi league={leagueCode} />
      </div>
    )
  }
}

export default League;