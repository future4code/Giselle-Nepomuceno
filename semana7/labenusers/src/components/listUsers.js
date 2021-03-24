import React from "react";
import axios from "axios";


export default class ListUsers extends React.Component {
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
    });
  };

    render(){
       const usersList = this.state.users.map((user) => (
         <li key ={user.id}>{user.name}</li>
       ));
        return (
        <div>
          <button onClick={this.props.register}>Voltar para registrar usuário</button>
          
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

