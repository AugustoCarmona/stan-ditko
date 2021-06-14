import React from 'react';
import { HeroContainer, Card, CardImg, InfoContainer } from './Hero.styles';
import { ids } from './CharIds';
import call from '../../CallApi'

const Hero = () => {
    let id = ids[Math.floor(Math.random()*ids.length)];
    let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c70bee055661b1eabc28f40a0fea1796`;
    let character = call(url, true, true);

    return (
        <HeroContainer>
            <Card>
                <CardImg src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt={character.name} />
            </Card>
            <InfoContainer>
                <h3>Wellcome to the Marvel's Hero Seach!</h3>
                <p>Dummy Text</p>
            </InfoContainer>
        </HeroContainer>
    );
}

export default Hero;
