import React from 'react';
import Api from './lib/api';

class League extends React.Component {
  
  render() {
    const country = this.props.match.params.league;

    return (
      <div>
        <Api countryCode={country} />
      </div>
    )
  }
}

export default League;