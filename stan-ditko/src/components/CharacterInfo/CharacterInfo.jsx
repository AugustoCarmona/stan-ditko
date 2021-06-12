import React, { useEffect, useState } from 'react';
import {
    HeroContainer,
    Card,
    CardImg,
    InfoContainer
} from './CharacterInfo.style';
import axios from 'axios';
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
    const { characterId } = useParams();
    const [hero, setCharacter] = useState([]);

    useEffect(()=> {
        axios
        .get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=c70bee055661b1eabc28f40a0fea1796`)
        .then(res=>{
            setCharacter(res.data.data.results[0]);
        })
        .catch(error=>console.log(error));
    }, []);

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

export default CharacterInfo;
