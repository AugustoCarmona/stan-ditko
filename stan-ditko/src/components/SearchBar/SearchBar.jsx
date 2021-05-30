import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render () {
        return (
            <nav className="SearchBar
        ">
                <div className="left-side">
                    <div className="logo">
                        <a href="#"><img src="././src/assets/img/logo.png" alt="Marve Logo"/></a>
                    </div>
                </div>

                <div className="rigth-side">
                    <button>
                        <i class="fas fa-search"></i>
                    </button>
                    <input type="text" placeholder="Buscar"/>
                    <button>
                        <i class="far fa-star"></i>
                    </button>
                </div>
            </nav>
        );
    }
}

export default SearchBar;