import React from "react";
import ReactDOM from "react-dom";

import"./styles.css";
//import data from "./data.json";
import logo from "./images/logo.png";
import Loader from './components/Loader'

function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class App extends React.Component{
  //inicializamos el estado 
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: [],
    },
  }
  componentDidMount(){
    //Hacemos una llamada a la API
    this.fetchCharacters()

  }
  fetchCharacters = async () => {
    //validar el proceso de carga
    this.setState({loading: true, error: null})
    //funciones asincronas -> debemo espera a que los datos lleguen
    //Hacemos el try para intentar hacer la petición
    try{
      const  response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`)
      const data = await response.json()
      //si obtenemos la datos loading se vuelve falso
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(
            //los anteriores
            this.state.data.results,
            //más los nuevos
            data.results
          )
        },
        nextPage: this.state.nextPage + 1,
      })
    }
    catch(e){
      this.setState({
        loading: false,
        error: e,
      })
    }
 
  }
  render() {
    if(this.state.error){
      return `Error en el sistema ${this.state.error.mensagge}`
    }
    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick and Morty" />

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
          { this.state.loading && (
            <div className="loader">
              <Loader/>
            </div>    
          ) }
          { !this.state.loading && (
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )}
                         
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);