import React from "react";
import './App.css';
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"
// import styled from "styled-components"

// const MeuApp = styled.div `
// display:flex;

// justify-content: center;
// margin: 60px;`


export default class App extends React.Component {

  render(){
    return (
      <div >
        Oi Giselle!
        <div>
          <Etapa1/>
        </div>
        <div>
          <Etapa2/>
        </div>
        <div>
          <Etapa3/>
        </div>
        <div>
          <Final/>
        </div>
        
      </div>
    );
  }
 
}
