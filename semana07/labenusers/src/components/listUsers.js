import React from "react";
import axios from "axios";
import UserDetails from "./UserDetails"
import styled from "styled-components";


const CenterContent = styled.div`
margin-top:50px;
display:flex;
justify-content: center;
li{list-style:none;}
`;


export default class ListUsers extends React.Component {
  state ={
    users:[],
    page:"users",
    userId:"",
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
    });
  };
  deleteUser = (id) => {
      if(window.confirm("Tem certeza quie quer deletar esse usuário?")){
        axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers:{
              Authorization:"giselle-rosa-cruz"
            }
          }
        )
        .then((res)=>{
          this.getUsers();
          console.log(res);
          alert("Usuário deletado com sucesso!")
        })
        .catch((err)=>{
          console.log(err);
          alert("Houve um erro interno, favor tentar novamente mais tarde")
        });
      }
  }
  changePage = (id) => {
    if (this.state.page === "users") {
      this.setState({ page: "userDetails", userId: id });
    // } else {
    //   this.setState({ page: "users", userId: "" });
    }
  };
    render(){
       const usersList = this.state.users.map((user) => {
          return (
            <li key ={user.id}>
                {user.name}  
              <button onClick={()=> this.changePage(user.id)}>Ver Detalhes</button>
              <button onClick={()=> this.deleteUser(user.id)}>Deletar</button>
            </li>
            );
        });
        return (
        <div>
          <button onClick={this.props.register}>Voltar para registrar usuário</button>
          
          <CenterContent>
              {this.state.page === "users" ? (
              <ul>{usersList}</ul>
            ) : (
              <UserDetails
                userId={this.state.userId}
                changePage={this.changePage}
              />
            )}
                {/* {this.state.users.length > 0 ?(
                <ul>{usersList}</ul>

              ):(
                
                <p>Carregando...</p>
              )}  */}
          </CenterContent>
          
            
        </div>
      );
    }
}

