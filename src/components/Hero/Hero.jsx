/*
This component gets its styles from SingleCharacter.styles.jsx (in the src folder)

In order to execute a random call to the API, it imports an array of ids on which it makes
a random choice, then pass the id as a parameter to the call() function
*/

import React from 'react';
import { Container, Presentation } from '../../SingleCharacter.styles';
import call from '../../CallApi'

let ids = [
    1009351,
    1009282,
    1010338,
    1014858,
    1016181,
    1011299,
    1009610,
    1009165,
    1009268,
    1009220,
    1009664,
    1009262,
    1017603,
    1016181,
    1009187,
    1011244,
    1011336,
    1010694,
    1014858,
    1014063,
    1010684,
    1016181,
    1014528,
    1009170
]

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
