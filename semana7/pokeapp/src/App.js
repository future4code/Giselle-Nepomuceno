import React from "react";
import './App.css';
import axios from "axios";

export default class App extends React.Component {
  state = {
    pokemons:[],
    pokePicture:"",
    pokeName:"",
    pokeXP:"",
    pokeType: "",
    pokeWeight:"",
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons =  async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=700&offset=0"
      );
      this.setState({pokemons: res.data.results});
      console.log(res.data.results);
  };
  getPicture = async (e) => {
    try{
      const name = this.state.pokeName;
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}/`
      );
      console.log(res.data.sprites.front_default);
      this.setState({pokePicture:res.data.sprites.front_default})
    } catch(err){
      console.logh(err)
    }
  };
  
  getType = async (e) => {
    try{
      const name = this.state.pokeName;
        const res = await axios.get (
          `https://pokeapi.co/api/v2/pokemon/${name}/`
        );
        console.log(res.data.types[0].type.name)
        this.setState({pokeType: res.data.types[0].type.name})
    } catch(err){
      console.log(err)
    }
  };
  getPokeXP = async (e) => {
    try{
      const name = this.state.pokeName;
        const res = await axios.get (
          `https://pokeapi.co/api/v2/pokemon/${name}/`
        );
        console.log(res.data.base_experience)
        this.setState({pokeXP: res.data.base_experience})
    } catch(err){
      console.log(err)
    }
  };

  getWeight = async (e) => {
    try{
      const name = this.state.pokeName;
        const res = await axios.get (
          `https://pokeapi.co/api/v2/pokemon/${name}/`
        );
        console.log(res.data.weight)
        this.setState({pokeWeight: res.data.weight})
    } catch(err){
      console.log(err)
    }
  };
  
  handlePokemonSelect = async (e) => {
    await this.setState({pokeName: e.target.value});
    this.getPicture();
    this.getPokeXP();
    this.getType();
    this.getWeight();
  };
  render(){
    const pokemonSelection = this.state.pokemons.map((poke)=> {
      return <option value={poke.name}>{poke.name}</option>
    })
    
    const SelectionPokemon = (()=>{
      return <div>
      <p>Name: {this.state.pokeName}</p> 
      <p>Base Experience: {this.state.pokeXP} </p>   
      <p>Type: {this.state.pokeType}</p>
      <p>Weight: {this.state.pokeWeight/10} kg </p>
      </div>
    })

    
  return (
    <div>
      <h1>Pokemon</h1>
      <h3>Tem que pegar! Pokemon!</h3>
      <select onChange = {this.handlePokemonSelect}>
        <option>Escolha seu Pokemon</option>
        {pokemonSelection}
      </select>
      <div>
        {this.state.pokePicture && (
          <div>
            <img src={this.state.pokePicture} alt = {"foto do pokemon selecionado"}/>
            <SelectionPokemon></SelectionPokemon>
          </div>
        )}
      </div>
    </div>
  );
  }
}
