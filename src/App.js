import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Main from './containers/Main/Main'
import './App.css';

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
  </Router>
  );
}

export default App;
