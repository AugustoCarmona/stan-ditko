import React, { Component, useState, useEffect } from 'react';
import { Bar } from './SearchBar.style';
import './SearchBar.css';
import { publicKey, ts, hash, url } from '../../Global';
import axios from 'axios';

class SearchBar extends Component {
    constructor( props ) {
		super( props );
		this.state = {
			query: '',
            results: {},
            message: '',
        };
        this.cancel = '';
    }

    fetchSearchResult = (query) => {
    	const searchUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${query}&apikey=${publicKey}`;

    	if (this.cancel) {
    		this.cancel.cancel();
        } this.cancel = axios.CancelToken.source();

    	axios
    		.get(searchUrl, {
    			cancelToken: this.cancel.token,
    		})
    		.then((res) => {
    			const resultNotFoundMsg = !res.data.hits.length ? 'No hay más resultados :p' : '';
    			this.setState({
    				results: res.data.hits,
    				message: resultNotFoundMsg,
    			});
    		})
    		.catch((error) => {
    			if (axios.isCancel(error) || error) {
    				this.setState({
    					message: 'No pudimos conectarnos con el servidor :(',
    				});
    			}
    		});
    };
    
    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query, message: '' }, ()=> {
            this.fetchSearchResult(query);
        });
    };

    render () {
        const {query} = this.state;
        console.warn(this.state);

        return (
            <header className="SearchBar">
                <section className="left-side">
                    <div className="logo">
                        <a href="#"><img src="././src/assets/img/logo.png" alt="Marvel Logo"/></a>
                    </div>
                </section>

                <section className="rigth-side">
                    <button>
                        <i className="fas fa-search"></i>
                    </button>
                    <input
                        name="query"
                        type="text"
                        placeholder="Buscar"
						value={query}
                        id="search-input"
                        onChange={this.handleOnInputChange}
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
