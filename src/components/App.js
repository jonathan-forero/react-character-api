import React from 'react';
import CharacterCard from './CharacterCard';
import logo from '../images/breaking_bad.png';

class App extends React.Component {

    state = {
        loading: true,
        error: null,
        data: [],
        limit: 9
    };

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({ loading: true, error: null });

        try {
            const response = await fetch(
                `https://www.breakingbadapi.com/api/characters?limit=${this.state.limit}`
            );
            const data = await response.json();

            this.setState({
                loading: false,
                error: null,
                data: data,
                limit: this.state.limit + 9
            });



        } catch (error) {
            this.setState({ loading: false, error: error });
        }

    };

    render() {
        if (this.state.error) {
            return "Error!";
        }

        return(
            <div className="container">
                <div className="App">
                <img className="Logo" src={logo} alt="Breaking Bad" />
                    <ul className="row">
                        {this.state.data.map( character => (
                            <li key={character.char_id}>
                                <CharacterCard character={character} />
                            </li>
                        ))}
                    </ul>

                    {this.state.loading && <p className="text-center loader">Loading...</p>}

                    {!this.state.loading && (this.state.limit < 72 ) && (
                        <button onClick={() => this.fetchCharacters()}>Load More</button>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
