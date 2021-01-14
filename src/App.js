import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import Home from './Components/Home/Home';
import BalanceSheet from './Components/BalanceSheet/BalanceSheet';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <div class="container-fluid">
          <Nav />
          <Switch>
            <Route extact path="/bnl" component={BalanceSheet} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
