import React from 'react';

class ScoreApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      league: {
        "en": {"code": "PL", "name": "Premier League"},
        "de": {"code": "BL1", "name": "Bundesliga 1"},
        "it": {"code": "SA", "name": "Serie A"},
        "sp": {"code": "PD", "name": "Primera Division"},
        "fr": {"code": "FL1", "name": "Ligue 1"}
      },
      table: [],
    }
  }

  fetchData() {
    const code = (this.state.league[this.props.league].code);
    const url = `http://api.football-data.org/v2/competitions/${code}/standings/`;
    const options = {
      headers: { 'X-Auth-Token': 'a626ac5d8a8f4a23a0532d4b81d0bf57' },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        this.setState({
          table: data.standings[0].table
        })
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.league !== prevProps.league) {
      this.fetchData();
    }
  }

  render() {
    const league = this.state.league[(this.props.league)].name;
    const teams = this.state.table;

    return (
      <div className="league-table">
        <h2 className="league-name">{league}</h2>
        <ul className="table">
          <li key="th" className="table-heading">
            <ul>
              <li key="th-1">Pos</li>
              <li key="th-2">Team</li>
              <li key="th-0">Pld</li>
              <li key="th-3">W</li>
              <li key="th-4">D</li>
              <li key="th-5">L</li>
              <li key="th-6">GF</li>
              <li key="th-7">GA</li>
              <li key="th-8">GD</li>
              <li key="th-9">Pts</li>
            </ul>
          </li>
          {teams.map(el => 
            <li key={el.team.id} className="table-row">
              <ul>
                <li key="pos" className="pos">{el.position}</li>
                <li key="team" className="team">
                  <img className="crest" src={el.team.crestUrl} alt=""/>
                  {el.team.name}
                </li>
                <li key="win">{el.won + el.draw + el.lost}</li>
                <li key="win">{el.won}</li>
                <li key="drw">{el.draw}</li>
                <li key="los">{el.lost}</li>
                <li key="gf">{el.goalsFor}</li>
                <li key="ga">{el.goalsAgainst}</li>
                <li key="gd">{el.goalDifference}</li>
                <li key="pnt" className="pts">{el.points}</li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ScoreApi;