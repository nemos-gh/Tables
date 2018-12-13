import React from 'react';

const Table = (props) => {
  const table = props.table;
  const d = new Date(props.lastUpdate);
  const th = ['Pos', 'Team', 'Pld', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <ul className="league-table">
      <li className="league-name">{props.league}</li>
      <li key="th" className="table-heading">
        <ul>
          {th.map(el => <li key={el}>{el}</li> )}
        </ul>
      </li>
      {table.map(el => 
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

export default Table;