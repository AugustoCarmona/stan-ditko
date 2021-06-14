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
        transform: skewY(17deg);
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
    display: none;
`;

export const CardImg =  Styled.img `
    width: 530px;
    height: 410px;
    border-radius: 3px;
    object-fit: cover;
    display: none;
`;

export const InfoContainer =  Styled.div `
    color: #ffffff;
    font-size: 28px;
    width: 50%;
    bottom: 0;
    display: none;
`;
