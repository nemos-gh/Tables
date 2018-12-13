import React from 'react';

const Table = (props) => {
  const league = props.league;
  const table = props.table;
  const th = ['Pos', 'Team', 'Pld', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'];

  return (
    <div className="league-table">
      <h2 className="league-name">{league}</h2>
      <ul className="table">
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
      </ul>
    </div>
  )
}

export default Table;