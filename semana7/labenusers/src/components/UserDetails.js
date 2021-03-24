import React from "react";
import axios from "axios";


export default class ListUsers extends React.Component {
  getUsersById = (id) => {
    const body = {
      name: this.state.inputValueName,
      email: this.state.inputValueEmail
    };
    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
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
       
        return (
        <div>
          <button onClick={this.props.ListUsers}>Voltar para Lista </button>
          <p>{this.props.userId.name}
          {this.props.UserId.email}</p>
         
            
        </div>
      );
    }
}

