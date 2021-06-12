import React, { useContext, useEffect, useState } from 'react';
import { GridContainer, GridCard, CardImg, Details, Fav } from './Grid.style';
import { url } from '../../Global';
import axios from 'axios';
// import Context from 'context';
import { Link } from "react-router-dom";

const Grid = () => {
    const [characters, setCharacters] = useState([]);
    
    useEffect(()=> {
        axios
        .get(`${url}`)
        .then(res=>{
            setCharacters(res.data.data.results);
        })
        .catch(error=>console.log(error));
    }, []);
    console.log(characters);

    /*
    const onClick = () => {
        console.log("click");
    };

    const isFav = () => {
        const [state, setState] = useContext(false);
        localStorage.setItem('comicsStars', JSON.stringify(favs));
        setState({isFav: true});
        return setState;
    };
    */

    return (
        <GridContainer>
            {characters.map((item, index)=>{
                return (
                    <GridCard key={index}>
                        <Link to={`/hero/${item.id}`}>
                            <CardImg src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name}/>
                            <Fav>
                                <i className="far fa-star" /*onClick={onClick}*/></i>
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

