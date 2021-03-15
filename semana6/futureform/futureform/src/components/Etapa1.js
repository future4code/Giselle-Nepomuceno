
import React from "react";
// import styled from "styled-components"

// const selecaoescolaridade = styled.select `
// height: 20px;
//`

export default class Etapa1 extends React.Component{
    render(){
        return(
            <div>
                <h2> Etapa 1 - DADOS GERAIS </h2>
                <div>
                    <p>1. Qual seu nome?</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>2. Qual a sua idade?</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>3. Qual seu email?</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>4. Qual a sua escolaridade</p>
                    <select name="escolaridade" >
                        <option value="Ensino Médio Incompleto"></option>
                        <option value="Ensino Médio Completo"></option>
                        <option value="Ensino Superior Incompleto"></option>
                        <option value="Ensino Superior Completo"></option>
                    </select>
                </div>
            </div>
        )
    }

}

