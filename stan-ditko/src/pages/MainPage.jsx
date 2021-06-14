import React from "react";
import '../assets/css/Normalize.css';
import '../assets/css/App.css';
import RandomHero from '../components/Hero/Hero';
import SearchBar from '../components/SearchBar/SearchBar';
import Grid from '../components/Grid/Grid';
import Footer from '../components/Footer/Footer';

const MainPage = () => {
    return(
        <div className="App">
          <div className="nav-bar">
            <SearchBar />
            <RandomHero />
            <Grid />
            <Footer />
          </div>
        </div>
    );
}

export default MainPage;