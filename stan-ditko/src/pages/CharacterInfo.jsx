import React from "react";
import '../assets/css/Normalize.css';
import '../assets/css/App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroDetails from '../components/CharacterInfo/CharacterInfo';
import ComicsList from '../components/ComicsList/ComicsList';
import Footer from '../components/Footer/Footer';

const Hero = () => {
    return(
        <div className="App">
          <div className="nav-bar">
            <SearchBar />
            <HeroDetails />
            <ComicsList />
            <Footer />
          </div>
        </div>
    );
}

export default Hero;