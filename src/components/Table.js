import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      table: props.standings[0].table
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.standings !== prevProps.standings) {
      this.setState({
        table: this.props.standings[0].table
      })
    }
  }

  render() {
    const d = new Date(this.props.lastUpdate);
    const th = ['Pos', 'Team', 'Pld', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return (
      <ul className="league-table">
        <li className="league-name">{this.props.league}</li>
        <li key="th" className="table-heading">
          <ul>
            {th.map(el => <li key={el}>{el}</li> )}
          </ul>
        </li>
        {this.state.table.map(el => 
          <li key={el.team.id} className="table-row">
            <ul>
              <li key="0" className="pos">{el.position}</li>
              <li key="1" className="team">
                <img className="crest" src={el.team.crestUrl} alt=""/>
                {el.team.name}
              </li>
              <li key="2">{el.won + el.draw + el.lost}</li>
              <li key="3">{el.won}</li>
              <li key="4">{el.draw}</li>
              <li key="5">{el.lost}</li>
              <li key="6">{el.goalsFor}</li>
              <li key="7">{el.goalsAgainst}</li>
              <li key="8">{el.goalDifference}</li>
              <li key="9" className="pts">{el.points}</li>
            </ul>
          </li>
        )}
        <li className="last-update">
          Last update: {`${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`}
        </li>
      </ul>
    )
  }
}

export default Table;

Table.propTypes = {
  league: PropTypes.string.isRequired,
  standings: PropTypes.array.isRequired,
  lastUpdate: PropTypes.string.isRequired
}