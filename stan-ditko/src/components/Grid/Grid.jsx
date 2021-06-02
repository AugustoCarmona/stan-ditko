import React, { useEffect, useState } from 'react';
import './Grid.css';
import { url } from '../../Global';
import axios from 'axios';

const Grid = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(()=> {
        axios.get(`${url}`).then(res=>{
            setCharacters(res.data.data.results);
        }).catch(error=>console.log(error));
    }, []);
    console.log(characters);

    return (
        <section className="grid_container">
            {characters.map((item, index)=>{
                return (
                <div className="grid-card" key={index}>
                    <a href={item.url}>
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} className="grid-card_img"/>
                        <button className="fav">
                            <i className="far fa-star"></i>
                        </button>
                        <div className="grid-card_details">
                            <p>{item.name}</p>
                        </div>
                    </a>
                </div>);
            })}
        </section>
    );
}

export default Grid;
