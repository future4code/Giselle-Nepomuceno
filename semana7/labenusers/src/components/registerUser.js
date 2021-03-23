import React from "react";
import axios from "axios";
// import styled from "styled-components";

export default class registerUsers extends React.Component {
  state ={
    users:[],
    inputValueName:"",
    inputValueEmail:"",
  };

  componentDidMount(){
    this.getUsers();
  }

  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value });
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
      this.setState({playlists: res.data.result.list});
      console.log(res.data.result.list);
    })
    .catch((err)=> {
      console.log(err.response.data);
    });

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
      // const usersList = this.state.users.map((user) => ())
        return (
        <div>
            <div>
              Nome:<input
              value={this.state.inputValueName}
              />
            </div>
            <div>
              Email:<input
              value={this.state.inputValueEmail}
              />
            </div>
            <div>
              <button onClick={this.createUser}>Salvar Usuário</button>
            </div>
        </div>
      );
    }
}

