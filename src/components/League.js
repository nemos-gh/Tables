import React from 'react';
import Api from './lib/api';

class League extends React.Component {
  
  render() {
    const countrie = this.props.match.params.league;

    return (
      <div>
        <Api countrieCode={countrie} />
      </div>
    )
  }
}

export default League;