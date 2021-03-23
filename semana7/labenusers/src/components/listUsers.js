import React from "react";
import axios from "axios";
import styled from "styled-components";

const MeuStilo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
border:1.5px solid black;
height:100px;
width:300px;
`

export default class listUsers extends React.Component {
  state ={
    users:[],
  };

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () => {
    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      
      {
        headers: {
          Authorization:"giselle-rosa-cruz"
        }
      }
    )
    .then((res) => {
      console.log(res);
      this.setState({users: res.data });
      
    })
    .catch((err) => {
      console.log(err)
      alert("O programador fez merda, volte depois 🤣")
    });
  };

    render(){
       const usersList = this.state.users.map((user) => (
         <li key ={user.id}>{user.name}</li>
       ));
        return (
        <div>
          <button>Voltar para registrar usuário</button>
          
          <div>
                {this.state.users.length > 0 ?(
                <ul>{usersList}</ul>
              ):(
                <p>Carregando...</p>
              )}
          </div>
            
        </div>
      );
    }
}

