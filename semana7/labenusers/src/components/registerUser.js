import React from "react";
import axios from "axios";
import styled from "styled-components";

const Box = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
border:1.5px solid black;
height:150px;
width:300px;
`;
const CenterContent = styled.div`
display:flex;
justify-content: center;
`;

const InputField = styled.div`
padding:10px;
`;

export default class RegisterUser extends React.Component {
  state ={
    inputValueName:"",
    inputValueEmail:"",
  };

  handleInputNameChange = (e) => {
    this.setState({inputValueName: e.target.value });
  }
  // esse é a abreviação de event...
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
      })
      .catch((err) => {
        console.log(err)
      });
    };
    render(){
       return (
        <div>
          <button onClick={this.props.list}>Ir para lista de Usuários</button>
          <CenterContent>
            <Box>
              <InputField>
                Nome:<input
                value={this.state.inputValueName}
                onChange={this.handleInputNameChange}
                />
              </InputField>
              <InputField>
                Email:<input
                value={this.state.inputValueEmail}
                onChange={this.handleInputEmailChange}
                />
              </InputField>
              <div>
                <button onClick={this.createUser}>Salvar Usuário</button>
              </div>
            </Box>              
          </CenterContent>
         
        </div>
      );
    }
}

