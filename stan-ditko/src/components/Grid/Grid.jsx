import React from 'react';
import { Link } from "react-router-dom";
import call from '../../CallApi'
import {
    GridContainer,
    GridCard,
    CardImg,
    Details,
    Fav
} from './Grid.styles';

const Grid = () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=10&apikey=c70bee055661b1eabc28f40a0fea1796`;
    let characters = call(url);

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

