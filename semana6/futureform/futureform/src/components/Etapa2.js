import React from "react";
// import styled from "styled-components";


export default class Etapa2 extends React.Component{
    
    render(){

        return(
            <div>
                <h2> Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h2>
                <div>
                    <p>1. Qual o curso?</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>2. Qual a unidade de ensino?</p>
                    <input type="text"></input>
                </div>
            </div>
        )

    }
}