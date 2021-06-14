/*
This component gets its styles from SingleCharacter.styles.jsx (in the src folder)

In order to execute a random call to the API, it imports an array of ids on which it makes
a random choice, then pass the id as a parameter to the call() function
*/

import React from 'react';
import { Container, Presentation } from '../../SingleCharacter.styles';
import { ids } from './CharIds';
import call from '../../CallApi'

const Hero = () => {
    let id = ids[Math.floor(Math.random()*ids.length)]; // random id choise
    let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c70bee055661b1eabc28f40a0fea1796`;
    let character = call(url, true);

    return (
        <Container>
            <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt={character.name} />
            <Presentation><h1>Wellcome to Marvel's Hero Seach!</h1></Presentation>
        </Container>
    );
}

export default Hero;
