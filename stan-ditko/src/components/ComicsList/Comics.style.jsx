import Styled from 'styled-components';

export const Comics =  Styled.div `
    padding-top: 20px;
    font-size: 80px;
    color: #fff;
`;

export const GridContainer =  Styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, 400px);
    justify-content: center;
    grid-gap: 70px;
    padding-left: 5.5%;
`;

export const ComicCard =  Styled.div `
    width: 320px;
    height: 490px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ComicImg =  Styled.img `
    width: 320px;
    height: 490px;
    object-fit: cover;
`;

export const Fav =  Styled.div `
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
