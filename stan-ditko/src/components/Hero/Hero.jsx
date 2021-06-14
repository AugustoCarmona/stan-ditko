import React from 'react';
import { Container, Presentation } from '../../SingleCharacter.styles';
import { ids } from './CharIds';
import call from '../../CallApi'

const Hero = () => {
    let id = ids[Math.floor(Math.random()*ids.length)];
    let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c70bee055661b1eabc28f40a0fea1796`;
    let character = call(url, true, true);

    return (
        <Container>
            <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt={character.name} />
            <Presentation><h1>Wellcome to Marvel's Hero Seach!</h1></Presentation>
        </Container>
    );
}

export default Hero;
