import React, { useEffect, useState } from 'react';
import {
    HeroContainer,
    Card,
    CardImg,
    InfoContainer,
    Comics,
    GridContainer,
    ComicCard,
    ComicImg,
    Fav,
    Details
} from './HeroDetails.style';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const HeroDetails = () => {
    const { characterId } = useParams();
    const [hero, setCharacter] = useState([]);
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        axios
        .get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=c70bee055661b1eabc28f40a0fea1796`)
        .then(res=>{
            setCharacter(res.data.data.results[0]);
        })
        .catch(error=>console.log(error));
    }, []);
    console.log(hero);

    return (
        <div>
            <HeroContainer>
                <Card>
                    <CardImg src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`} />
                </Card>
                <InfoContainer>
                    <h3>{hero?.name}</h3>
                    <p>{hero?.description}</p>
                </InfoContainer>
            </HeroContainer>
        </div>
    );
}

export default HeroDetails;
