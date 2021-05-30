import React, { Component } from 'react';
import { MenuItems } from './MenuItem';
import './Navbar.css';

class NavBar extends Component {
    render () {
        return (
            <nav className="navbar">
                <div className="left-side">
                    <div className="logo">
                        <a href="#">Marvel</a>
                    </div>
                </div>

                <div className="rigth-side">
                    <input type="text" placeholder="Search"/>
                    <button>Search</button>
                </div>
            </nav>
        );
    }
}

export default NavBar;