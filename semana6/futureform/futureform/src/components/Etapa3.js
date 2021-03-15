import React from "react";
// import styled from "styled-components";


export default class Etapa3 extends React.Component{
   
    render(){

        return(
            <div>
                <h2> Etapa 3 - ETAPAS GERAIS DE ENSINO </h2>
                <div>
                    <p>1. Porque você não terminou o curso de graduação?</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>2. Você faz algum curso complementar?</p>
                    <select name="escolaridade" >
                        <option value="Inglês"></option>
                        <option value="Informática"></option>
                    </select>
                </div>
            </div>
        )

    }
}