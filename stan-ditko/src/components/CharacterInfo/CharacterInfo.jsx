import React from 'react';
import {
    HeroContainer,
    Card,
    CardImg,
    InfoContainer
} from './CharacterInfo.style';
import { useParams } from "react-router-dom";
import call from '../../CallApi'

const CharacterInfo = () => {
    const { characterId } = useParams();
    let url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=c70bee055661b1eabc28f40a0fea1796`;
    let character = call(url);

    return (
        <div>
            <HeroContainer>
                <Card>
                    <CardImg src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} />
                </Card>
                <InfoContainer>
                    <h3>{character?.name}</h3>
                    <p>{character?.description}</p>
                </InfoContainer>
            </HeroContainer>
        </div>
    );
}

export default CharacterInfo;
