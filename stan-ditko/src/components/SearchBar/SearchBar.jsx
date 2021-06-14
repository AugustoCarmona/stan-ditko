import React, { useEffect } from 'react';
import {
    Header,
    Logo,
    Form,
    Button,
    Input
} from './SearchBar.styles'

const SearchBar = () => {
    return (
        <Header>
            <Logo><a href="/"><img src="/././src/assets/img/logo.png" alt="Marvel Logo"/></a></Logo>
            <Form>
                <Button><i className="fas fa-search"></i></Button>
                <Input
                    className=''
                    type='text'
                    name='search'
                    placeholder='Search for a hero'
                />
            </Form>
        </Header>
    );
}

export default SearchBar;
