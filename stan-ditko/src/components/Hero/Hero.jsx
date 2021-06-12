import React, { useEffect, useState } from 'react';
import { ids } from './charIds';
import axios from 'axios';
import './styles.css';

const RandomHero = () => {
    const [hero, setCharacter] = useState([]);
    
    useEffect(()=> {
        let id = ids[Math.floor(Math.random()*ids.length)];
        axios
        .get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c70bee055661b1eabc28f40a0fea1796`)
        .then(res=>{
            setCharacter(res.data.data.results[0]);
        })
        .catch(error=>console.log(error));
    }, []);
    console.log(hero);

    return (
        <section className="heroContainer">
            <div className="card">
                <img src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`} alt={hero.name}/>
            </div>
            <div className="infoContainer">
                <h3>Wellcome to the Marvel's Hero Seach!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.</p>
            </div>
        </section>
    );
}

export default RandomHero;

