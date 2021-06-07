import React, { useEffect, useState } from 'react';
import { GridContainer, GridCard, CardImg, Details, Fav } from '../Grid/Grid.style';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const HeroDetails = () => {
    const { characterId } = useParams();
    const [character, setCharacter] = useState([]);
    useEffect(()=> {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=c70bee055661b1eabc28f40a0fea1796`)
        .then(res=>{
            setCharacter(res.data.data.results);
        }).catch(error=>console.log(error));
    }, []);
    console.log(character);

    return (
        <GridContainer>
            {character.map((item, index)=>{
                return (
                <GridCard key={index}>
                    <CardImg src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name}/>
                </GridCard>);
            })}
        </GridContainer>
    );
}

export default HeroDetails;

