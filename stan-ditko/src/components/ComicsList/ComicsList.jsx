import React from 'react';
import { Comics } from './Comics.style';
import { useParams } from "react-router-dom";
import './styles.css'
import call from '../../CallApi'

const ComicsList = () => {
    const { characterId } = useParams();
    let url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?orderBy=issueNumber&limit=21&apikey=c70bee055661b1eabc28f40a0fea1796`;
    let comics = call(url);

    return (
        <Comics>
            <h4>Here you have some Comics</h4>
            <section className="ComicsContainer">
            {comics.map((item,index)=>{
                return(
                    <div key={index}>
                        <div className="ComicSelfContainer">
                            <div className="foto">
                                <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name} />
                            </div>
                            <div className="info">
                                <div className="arriba">
                                    <h5>{item.title}</h5>
                                </div>
                                <div className="abajo">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            </section>
        </Comics>
    );
}

export default ComicsList;
