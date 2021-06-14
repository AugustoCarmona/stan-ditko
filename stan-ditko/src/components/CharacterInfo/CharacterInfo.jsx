/*
This component gets its styles from SingleCharacter.styles.jsx (in the src folder)
*/

import React from 'react';
import { Container, Presentation } from '../../SingleCharacter.styles';
import { useParams } from "react-router-dom";
import call from '../../CallApi'

const CharacterInfo = () => {
    const { characterId } = useParams();
    let url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=c70bee055661b1eabc28f40a0fea1796`;
    let character = call(url, true);

    return (
        <div>
            <Container>
                    <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} />
                    <Presentation>
                        <h3>{character?.name}</h3>
                        <p>{character?.description}</p>
                    </Presentation>
            </Container>
        </div>
    );
}

export default CharacterInfo;
