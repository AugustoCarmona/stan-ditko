import React from 'react';
import { HeroContainer, Card, CardImg, InfoContainer } from './Hero.styles';
import { ids } from './CharIds';
import call from '../../CallApi'

const Hero = () => {
    let id = ids[Math.floor(Math.random()*ids.length)];
    let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c70bee055661b1eabc28f40a0fea1796`;
    let character = call(url);
    console.log(character)
    // let character = array[0];

    return (
        <HeroContainer>
            <Card>
                <CardImg src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt={character.name} />
            </Card>
            <InfoContainer>
                <h3>Wellcome to the Marvel's Hero Seach!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.</p>
            </InfoContainer>
        </HeroContainer>
    );
}

export default Hero;
