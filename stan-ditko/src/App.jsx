import React from 'react';
import './assets/css/App.css';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import CharacterInfo from './pages/CharacterInfo';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    /* <Context > */
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/hero/:characterId" component={CharacterInfo} />
          <Route exact path="/" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    /* <Context /> */
  );
}

export default App;