import React, { useEffect, useState } from 'react';
import { GridContainer, GridCard, CardImg, Details, Fav } from './Grid.style';
import { url } from '../../Global';
import axios from 'axios';

const Grid = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(()=> {
        axios.get(`${url}`).then(res=>{
            setCharacters(res.data.data.results);
        }).catch(error=>console.log(error));
    }, []);
    console.log(characters);

    return (
        <GridContainer>
            {characters.map((item, index)=>{
                return (
                <GridCard key={index}>
                    <a href={item.url}>
                        <CardImg src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name}/>
                        <Fav>
                            <i className="far fa-star"></i>
                        </Fav>
                        <Details>
                            <p>{item.name}</p>
                        </Details>
                    </a>
                </GridCard>);
            })}
        </GridContainer>
    );
}

export default Grid;
