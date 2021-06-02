import React, { useEffect, useState } from 'react';
import './assets/css/Normalize.css';
import './assets/css/App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Grid from './components/Grid/Grid';
// import { url } from './Global';
// import axios from 'axios';

function App() {

  return (
    <div className="App">
      <div className="nav-bar">
        <SearchBar />
        <Grid />
        {/* <SearchBar /> */}
        {/* <Grid /> */}
      </div>
    </div>
  )
}

export default App