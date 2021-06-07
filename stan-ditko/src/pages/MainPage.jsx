import React from "react";
import '../assets/css/Normalize.css';
import '../assets/css/App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Grid from '../components/Grid/Grid';

const MainPage = () => {
    return(
        <div className="App">
          <div className="nav-bar">
            <SearchBar />
            <Grid />
          </div>
        </div>
    );
}

export default MainPage;