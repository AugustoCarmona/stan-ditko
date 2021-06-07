import React from "react";
import '../assets/css/Normalize.css';
import '../assets/css/App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroDetails from '../components/HeroDetails/HeroDetails';

const Hero = () => {
    return(
        <div className="App">
          <div className="nav-bar">
            <SearchBar />
            <HeroDetails />
          </div>
        </div>
    );
}

export default Hero;