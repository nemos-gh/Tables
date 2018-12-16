import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import League from './League';
import About from './About';
import SideMenu from './SideMenu';

const Content = () => {

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2">
            <SideMenu />
          </div>
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/table/:country" component={League}/>
              <Route path="/about" component={About}/>
            </Switch>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Content;