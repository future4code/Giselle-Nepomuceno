import React from "react";
import './App.css';
import axios from "axios";
import styled from "styled-components"

const ContentPoke = styled.div`
display:grid; 
justify-content:center;
`;
const CardPoke = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top: 20px;
align-items:center;
border: 1px solid black;
width: 300px;
border-radius: 8px;
font-weight:600;
`;

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
        "https://pokeapi.co/api/v2/pokemon?limit=800&offset=0"
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
      if (this.state.pokeType === "fire"){
        this.setState({pokeType: "Fogo"})
      }else if (this.state.pokeType === "water"){
        this.setState({pokeType: "Água"})
      }else if (this.state.pokeType === "bug"){
        this.setState({pokeType: "Inseto"})
      }else if (this.state.pokeType === "grass"){
        this.setState({pokeType: "Planta"})
      }else if (this.state.pokeType === "Rock"){
        this.setState({pokeType: "Pedra"})
      }else if (this.state.pokeType === "psychic"){
        this.setState({pokeType: "Psíquico"})
      }else if (this.state.pokeType === "eletric"){
        this.setState({pokeType: "Elétrico"})
      }else if (this.state.pokeType === "ice"){
        this.setState({pokeType: "Gelo"})
      }else if (this.state.pokeType === "rock"){
        this.setState({pokeType: "Pedra"})
      }else if (this.state.pokeType === "ghost"){
        this.setState({pokeType: "Fantasma"})
      } else if (this.state.pokeType === "dark"){
        this.setState({pokeType: "Negro"})
      }else if (this.state.pokeType === "poison"){
        this.setState({pokeType: "Venenoso"})
      }else if (this.state.pokeType === "fairy"){
        this.setState({pokeType: "Fada"})
      }else if (this.state.pokeType === "fighting"){
        this.setState({pokeType: "Luta"})
      }else if (this.state.pokeType === "normal"){
        this.setState({pokeType: "Normal"})
      }else if (this.state.pokeType === "steel"){
        this.setState({pokeType: "Metálico"})
      }else if (this.state.pokeType === "flying"){
        this.setState({pokeType: "Voador"})
      }else if (this.state.pokeType === "ground"){
        this.setState({pokeType: "Terrestre"})
      }else if (this.state.pokeType === "dragon"){
        this.setState({pokeType: "Dragão"})
      }
      return <div>
      <p>Nome: {this.state.pokeName}</p> 
      <p>Experiência Base: {this.state.pokeXP} XP</p>   
      <p>Tipo: {this.state.pokeType}</p>
      <p>Peso: {this.state.pokeWeight/10} kg </p>
      </div>
    })

    
  return (
    <ContentPoke>
      <h1>Pokemon</h1>
      <h3>Selecione um Pokemon!</h3>
      <select onChange = {this.handlePokemonSelect}>
          {pokemonSelection}
      </select>
      <div>
        {this.state.pokePicture && (
          <CardPoke>
            <img src={this.state.pokePicture} alt = {"foto do pokemon selecionado"}/>
            <SelectionPokemon></SelectionPokemon>
          </CardPoke>
        )}
      </div>
    </ContentPoke>
  );
  }
}
