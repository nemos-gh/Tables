import React from 'react';
import Countries from './countries';
import Table from '../Table';
import ApiKey from './api-key';

class Api extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }

  getLeagueCode() {
    const code = Countries.find(obj => obj.shortName === this.props.countryCode).leagueCode;

    return code;
  }

  fetchData(code) {
    const url = `http://api.football-data.org/v2/competitions/${code}/standings/`;
    const options = {
      headers: { 'X-Auth-Token': ApiKey },
    };

    fetch(url, options)
      .then(res => res.json())
      .catch((error) => console.warn("fetch error:", error))
      .then(data => {
        this.setState({data})
      })
  }

  componentDidMount() {
    this.fetchData(this.getLeagueCode());
  }

  componentDidUpdate(prevProps) {
    if (this.props.countryCode !== prevProps.countryCode) {
      this.fetchData(this.getLeagueCode());
    }
  }

  render() {
    if (!this.state.data) {
      return (
        <div className="loading">Data Loading...</div>
      )
    }

    return (
      <Table
        league={this.state.data.competition.name}
        table={this.state.data.standings[0].table}
        lastUpdate={this.state.data.competition.lastUpdated} />
    )
  }
}

export default Api;