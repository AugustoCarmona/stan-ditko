import Styled from 'styled-components';

export const HeroContainer =  Styled.section `
    background-color: #151515;
    display: flex;
    align-items: center;
    height: 450px;
    position: relative;
    &:after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background: inherit;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform-origin: top left;
        transform: skewY(4deg);
    }
`;

export const Card =  Styled.div `
    width: 530px;
    height: 410px;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 6%;
    padding-right: 3%;
`;

export const CardImg =  Styled.img `
    width: 530px;
    height: 410px;
    border-radius: 3px;
    object-fit: cover;
`;

export const InfoContainer =  Styled.div `
    color: #ffffff;
    font-size: 18px;
    width: 50%;
    bottom: 0;
`;

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
    width: 310px;
    height: 490px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ComicImg =  Styled.img `
    width: 310px;
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
