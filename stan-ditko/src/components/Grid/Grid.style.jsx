import Styled from 'styled-components';

export const GridContainer =  Styled.section `
    display: grid;
    grid-template-columns: repeat(auto-fit, 240px);
    justify-content: center;
    grid-gap: 20px;
    margin: 50px 0;
`;

export const GridCard =  Styled.div `
    width: 240px;
    height: 310px;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.4);
    transition: 1.3s;
    &:hover {
        box-shadow: 0 2rem 5rem rgba(0, 0, 0, 1);
    }
`;

export const CardImg =  Styled.img `
    width: 240px;
    height: 310px;
    border-radius: 3px;
    object-fit: cover;
`;

export const Details =  Styled.div `
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    padding: 6px;
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const Fav =  Styled.button `
    color: #d1d9d9;
    background: none;
    border: none;
    font-size: 25px;
    padding: 1rem;
    position: absolute;
    top: 0;
    left: 100;
    right: 0;
    bottom: 100;
    &:hover {
        cursor: ne-resize;
    }
`;