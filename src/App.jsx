import React from 'react';
import MainPage from './pages/MainPage';
import CharacterInfo from './pages/CharacterInfo';
import Modal from 'react-modal';
import './assets/css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
Modal.setAppElement('#root');

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/hero/:characterId" component={CharacterInfo} />
        </Switch>
      </Router>
  );
}

export default App;