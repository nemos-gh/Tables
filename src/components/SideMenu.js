import React from 'react';
import Countries from './lib/countries';
import { Link } from 'react-router-dom';

const SideMenu = () => {

  return (
    <nav className="side-menu">
      <ul>
        <li>Tables</li>
        {Countries.map(country => 
          <li key={country.shortName}>
            <Link to={`/table/${country.shortName}`}>{country.name}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default SideMenu;