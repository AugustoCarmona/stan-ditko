import React, { Component } from 'react';
import axios from 'axios';
import {
    Header,
    Logo,
    Form,
    Button,
    Input
} from './SearchBar.styles'

class SearchBar extends Component {
    state = {
      characters: null,
      loading: false,
      value: ''
    };
  
    search = async charName => {
        this.setState({ loading: true });
        const res = await axios(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${charName}&limit=10&apikey=c70bee055661b1eabc28f40a0fea1796`
        );
        const characters = await res.data.results;
        this.setState({ characters, loading: false });
        console.log(res.data.data.results[0]);
    };
  
    onChangeHandler = async e => {
      this.search(e.target.value);
      this.setState({ value: e.target.value });
    };

    render() {
        return (
            <header>
                <Header>
                    <Logo><a href="/"><img src="/././src/assets/img/logo.png" alt="Marvel Logo"/></a></Logo>
                    <Form>
                        <form>
                            <Button><i className="fas fa-search"></i></Button>
                            <Input
                                className=''
                                type='text'
                                name='search'
                                placeholder='Search for a hero'
                                value={this.state.value}
                                onChange={e => this.onChangeHandler(e)}
                            />
                        </form>
                    </Form>
                </Header>
            </header>
        );
    }
}

export default SearchBar;