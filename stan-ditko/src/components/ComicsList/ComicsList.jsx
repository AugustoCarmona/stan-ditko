import React, { useEffect, useState } from 'react';
import {
    HeroContainer,
    Card,
    CardImg,
    InfoContainer,
    Comics,
    GridContainer,
    ComicCard,
    ComicImg,
    Fav,
    Details
} from './Comics.style';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ComicsList = () => {
    const { characterId } = useParams();
    const [comics, setComics] = useState([]);

    useEffect(()=> {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?orderBy=issueNumber&limit=21&apikey=c70bee055661b1eabc28f40a0fea1796`)
        .then(res=>{
            setComics(res.data.data.results);
        })
        .catch(error=>console.log(error));
    }, []);
    console.log(comics);

    return (
        <div>
            <Comics>
                <h4>Comics</h4>
                <GridContainer>
                    {comics.map((item,index)=>{
                        return(
                            <ComicCard key={index}>
                                <Link to="/">
                                    <ComicImg src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name} />
                                    <Fav>
                                        <i className="far fa-star"></i>
                                    </Fav>
                                </Link>
                            </ComicCard>
                        );
                    })}
                </GridContainer>
            </Comics>
        </div>
    );
}

export default ComicsList;
