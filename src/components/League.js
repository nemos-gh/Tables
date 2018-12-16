import React from 'react';
import Api from './lib/api';
import Countries from './lib/countries';
import Table from './Table';

class League extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    Api(this.getFetchUrl())
      .then(data => this.setState({data}));
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.country !== prevProps.match.params.country) {
      Api(this.getFetchUrl())
        .then(data => this.setState({data}));
    }
  }

  render() {

    if (!this.state.data) {
      return <div className="loading">Data Loading...</div>
    }

    return (
      <Table
        league={this.state.data.competition.name}
        table={this.state.data.standings[0].table}
        lastUpdate={this.state.data.competition.lastUpdated} />
    )
  }

  getFetchUrl() {
    const country = this.props.match.params.country;
    const league = Countries.find(obj => obj.shortName === country).leagueCode;
    const url = `http://api.football-data.org/v2/competitions/${league}/standings/`;

    return url;
  }
}

export default League;