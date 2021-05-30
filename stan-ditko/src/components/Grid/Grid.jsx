import React, { Component } from 'react';
import './Grid.css';
import { CardsInfo } from './Cards.jsx';

class Grid extends Component {
    render() {
        return (
            <section className="grid">
                <div className="grid_container">
                    {CardsInfo.map((item, index)=>{
                        return (
                        <div className={item.cName} key={index}>
                            <a href={item.url}>
                                <img src={item.img_url} alt={item.name} className="grid-card_img"/>
                                <div className="grid-card_details">
                                    <p>{item.name}</p>
                                </div>
                            </a>
                        </div>);
                    })}
                </div>
            </section>
        );
    }
}

export default Grid;
