import React from 'react';
import './assets/css/App.css';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import Hero from './pages/Hero';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/hero/:characterId" component={Hero} />
        <Route exact path="/" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;