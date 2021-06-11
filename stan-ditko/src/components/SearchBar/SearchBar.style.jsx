import Styled from 'styled-components';

export const SearchBarStyle = styled.header`
    grid-column: 1/-1;
    background-color: #fafafa;
    box-shadow: 0 2px 5px grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 1vw;
    .LogoAndInput {
      display: flex;
      align-items: center;
}
.search {
    margin-left: 3vw;
    font-size: 18px;
    opacity: 0.4;
}
.search input {
    margin-left: 0.8vw;
    background-color: #fafafa;
    outline: none;
    border: none;
}
.search:hover {
    opacity: 1;
    i {
      opacity: 1;
    }
}
.LogoAndInput img {
    color: #20273e;
    height: 3.5vh;
    font-family: "Roboto Mono", monospace;
}
.favourites {
    margin-right: 5vw;
    opacity: 0.4;
}`;