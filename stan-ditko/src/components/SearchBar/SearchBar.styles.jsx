import Styled from 'styled-components';

export const Header =  Styled.header `
    background: #ffffff;
    max-width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    @media only screen and (min-width: 1024px) {
        height: 60px;
        flex-direction: row;
        align-items: center;
    }
`;

export var Logo =  Styled.label `
    img {
        max-height: 50px;
        padding: 0 80px 15px 80px;
        @media only screen and (min-width: 1024px) {
        padding: 10px 80px;
    }
    }
`;

export const Form =  Styled.div `
    display: flex;
    align-items: center;
`;

export var Button =  Styled.button `
    max-height: 80px;
    color: #d1d9d9;
    outline: none;
    background: none;
    border: none;
    font-size: 22px;
    border-left: 3px solid #d1d9d9;
    display: none;
    @media only screen and (min-width: 1024px) {
        display: inline;
    }
`;
export var Input =  Styled.input `
    height: 20px;
    max-width: 100%;
    border-radius: 5px;
    border-style: none;
    color: black;
    outline: none;
    font-size: 24px;
    text-align: center;
    @media only screen and (min-width: 1024px) {
        text-align: left;
    }
`;