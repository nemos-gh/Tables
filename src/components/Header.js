import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const imagesPath = process.env.PUBLIC_URL + '/assets/images';

  return (
    <header className="app-header">
      <div className="container">
        <div className="row">
          <div className="col">

            <nav className="top-nav">
              <Link to="/" className="logo">
                <img src={`${imagesPath}/soccer-ball.svg`} alt=""/>
                <h1>Tables</h1>
              </Link>

              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;