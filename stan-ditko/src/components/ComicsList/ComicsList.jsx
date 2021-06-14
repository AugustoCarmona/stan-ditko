import React, { useState } from 'react';
import {
    Comics,
    GridContainer,
    SelfContainer,
    Comic,
    Title
} from './ComicsList.styles';
import { useParams } from "react-router-dom";
import call from '../../CallApi'
import Modal from 'react-modal';

const ComicsList = () => {
    const { characterId } = useParams();
    let url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?orderBy=issueNumber&limit=20&apikey=c70bee055661b1eabc28f40a0fea1796`;
    let comics = call(url);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <Comics>
            <h4>Here you have some Comics</h4>
            <GridContainer>
            {comics.map((item,index)=>{
                return(
                    <SelfContainer key={index}>
                        <Comic>
                            <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name} />
                            <Title><button onClick={()=>{
                                setModalIsOpen(true);
                            }}><h5>{item.title}</h5></button></Title>
                            <Modal
                                isOpen={modalIsOpen}
                                style={
                                    {
                                        overlay: {
                                            background: 'grey'
                                        }
                                    }
                                }
                                onRequestClose={()=>{setModalIsOpen(false)}}>
                                <h1>hola</h1>
                                <div>
                                    <button onClick={()=>{
                                        setModalIsOpen(false);
                                    }}>Cierralo mi pana</button>
                                </div>
                            </Modal>
                        </Comic>
                    </SelfContainer>
                );
            })}
            </GridContainer>
        </Comics>
    );
}

export default ComicsList;

/*
<Comics>
    <h4>Here you have some Comics</h4>
    <section className="ComicsContainer">
    {comics.map((item,index)=>{
        return(
            <div key={index}>
                <div className="SelfContainer">
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
*/
