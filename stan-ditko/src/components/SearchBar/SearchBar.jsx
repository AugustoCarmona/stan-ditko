import React, { Component } from 'react';
import './SearchBar.css';
import axios from 'axios';

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
      console.log(res.data.data.results);
    };
  
    onChangeHandler = async e => {
      this.search(e.target.value);
      this.setState({ value: e.target.value });
    };
    
    render() {
        return (
            <header className="SearchBar">
                <section className="left-side">
                    <div className="logo">
                        <a href="/"><img src="/././src/assets/img/logo.png" alt="Marvel Logo"/></a>
                    </div>
                </section>
                <section className="rigth-side">
                    <button>
                        <i className="fas fa-search"></i>
                    </button>
                    <input
                        value={this.state.value}
                        onChange={e => this.onChangeHandler(e)}
                        placeholder="Search..."
                    />
                    <button>
                        <i className="far fa-star"></i>
                    </button>
                </section>
            </header>
        );
    }
}

export default SearchBar;
