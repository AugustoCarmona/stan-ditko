import React from 'react';
import { GridContainer, GridCard, CardImg, Details, Fav } from './Grid.style';
// import Context from 'context';
import { Link } from "react-router-dom";
import call from '../../CallApi'

const Grid = () => {
    let url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=10&apikey=c70bee055661b1eabc28f40a0fea1796`
    let characters = call(url);

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

