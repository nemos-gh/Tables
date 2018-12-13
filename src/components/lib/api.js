import React from 'react';
import Countries from './countries';
import Table from '../Table';

class Api extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      standings: [],
    }
  }

  getCountry() {
    const countrie = Countries.find(obj => obj.shortName === this.props.countrieCode);
   
    return countrie;
  }

  fetchData() {
    const code = this.getCountry().code;

    const url = `http://api.football-data.org/v2/competitions/${code}/standings/`;
    const options = {
      headers: { 'X-Auth-Token': 'a626ac5d8a8f4a23a0532d4b81d0bf57' },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        this.setState({
          standings: data.standings[0].table
        })
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.countrieCode !== prevProps.countrieCode) {
      this.fetchData();
    }
  }

  render() {
    const league = this.getCountry().league;
    const table = this.state.standings;

    return (
      <Table 
        league={league} 
        table={table} />
    )
  }
}

export default Api;