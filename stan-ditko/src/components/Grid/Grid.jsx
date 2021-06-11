import React, { useEffect, useState } from 'react';
import { GridContainer, GridCard, CardImg, Details, Fav } from './Grid.style';
import { url } from '../../Global';
import axios from 'axios';
import { Link } from "react-router-dom";

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
                        <Link to={`/hero/${item.id}`}>
                            <CardImg src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name}/>
                            <Fav>
                                <i className="far fa-star"></i>
                            </Fav>
                            <Details>
                                <p>{item.name}</p>
                            </Details>
                        </Link>
                    </GridCard>);
            })}
        </GridContainer>
    );
}

export default Grid;

