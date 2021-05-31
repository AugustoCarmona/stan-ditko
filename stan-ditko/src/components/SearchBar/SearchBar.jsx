import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    constructor( props ) {
		super( props );
		this.state = {
			query: '',
            results: {},
            loading: false,
            message: '',
		};
    }
    
    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query, loading: true, message: '' });
    };

    render () {
        const {query} = this.state;
        console.warn(this.state);
        return (
            <header className="SearchBar">
                <section className="left-side">
                    <div className="logo">
                        <a href="#"><img src="././src/assets/img/logo.png" alt="Marve Logo"/></a>
                    </div>
                </section>

                <section className="rigth-side">
                    <button>
                        <i class="fas fa-search"></i>
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
                        <i class="far fa-star"></i>
                    </button>
                </section>
            </header>
        );
    }
}

export default SearchBar;