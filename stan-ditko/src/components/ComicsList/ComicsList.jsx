/*
This component iterates over an array of comics. It's similar to the grid component.
Each comic has a modal that shows detailed information about it.
*/
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Modal from 'react-modal';
import call from '../../CallApi'
import {
    Comics,
    GridContainer,
    SelfContainer,
    Comic,
    Title
} from './ComicsList.styles';
import './modalStyles.css';

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
                            }}><h5>{item.title}</h5></button>
                            </Title>

                            <Modal
                                isOpen={modalIsOpen}
                                className="Modal"
                                overlayClassName="Overlay"
                                onRequestClose={()=>{setModalIsOpen(false)}}>
                                <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name} />
                                <div>
                                    <h4>{item.title}</h4>
                                    <h6>{item.description}</h6>
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
