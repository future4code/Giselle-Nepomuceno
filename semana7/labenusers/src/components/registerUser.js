import React from "react";
import axios from "axios";
import styled from "styled-components";

const MeuStilo = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
border:1.5px solid black;
height:100px;
width:300px;
`

export default class registerUser extends React.Component {
  state ={
    inputValueName:"",
    inputValueEmail:"",
  };

  handleInputNameChange = (e) => {
    this.setState({inputValueName: e.target.value });
  }
  handleInputEmailChange = (e) => {
    this.setState({inputValueEmail: e.target.value });
  
  }
 

   createUser = () => {
    const body = {
      name: this.state.inputValueName,
      email: this.state.inputValueEmail
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "giselle-rosa-cruz"
          }
        }
      )
      .then((res) =>{
        this.setState({inputValueName: ""})
        this.setState({inputValueEmail: ""})
        this.getUsers()
      })
      .catch((err) => {
        console.log(err.response.data)
      });
    };
    render(){
       return (
        <div>
          <button>Ir para lista de Usuários</button>
          <MeuStilo>
            <div>
              Nome:<input
              value={this.state.inputValueName}
              onChange={this.handleInputNameChange}
              />
            </div>
            <div>
              Email:<input
              value={this.state.inputValueEmail}
              onChange={this.handleInputEmailChange}
              />
            </div>
            <div>
              <button onClick={this.createUser}>Salvar Usuário</button>
            </div>
          </MeuStilo>
         
        </div>
      );
    }
}

