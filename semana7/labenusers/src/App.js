import React from "react";


export default class App extends React.Component {
  state ={
    
  };

  componentDidMount(){
    this.getUsers();
  }

  handleInputNameChange = (e) => {
    this.setState({inputValueName: e.target.value });
  }
  handleInputEmailChange = (e) => {
    this.setState({inputValueEmail: e.target.value });
  
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
       const usersList = this.state.users.map((user) => (
         <li key ={user.id}>{user.name}</li>
       ));
        return (
        <div>
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

