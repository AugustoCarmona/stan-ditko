import Styled from 'styled-components';

export const Container =  Styled.div `
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
        width: 100%;
        height: 750px;
        object-fit: cover;
    }
`;

export const Presentation =  Styled.section `
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
    margin: 50px;
    h1 {
        font-size: 100px;
        font-weight: 700;
        color: white;
    }
    h3 {
        font-size: 70px;
        font-weight: 700;
        color: white;
    }
    p {
        font-size: 23px;
        font-weight: 700;
        color: white;
        @media only screen and (min-width: 1024px) {
            font-size: 35px;
        }
    }
`;

