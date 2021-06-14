import Styled from 'styled-components';

export const Comics =  Styled.div `
    padding-top: 20px;
    font-size: 80px;
    color: #fff;
`;

export const GridContainer =  Styled.section `
    display: grid;
    grid-template-columns: repeat(auto-fit, 270px);
    justify-content: center;
    grid-gap: 90px;
    margin: 50px 0;
`;

export const SelfContainer =  Styled.section `
    width: 270px;
    background-color: white;
    height: 570px;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export const Comic =  Styled.div `
    img {
        width: 270px;
        max-height: 410px;
        border-radius: 3px;
        object-fit: cover;
    }
`;

export const Title =  Styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    h5 {
        color: black;
        font-size: 17px;
    }
    button {
        border: none;
        background: white;
        cursor: pointer;
    }
`;

