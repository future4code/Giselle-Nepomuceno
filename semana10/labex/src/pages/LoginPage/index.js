import React, {useState} from "react";
import { goToHomePage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent,ButtonContent, Input, Title, Field } from './styles'
import axios from "axios";
import { Container } from "../HomePage/styles";

export default function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/login", body)
    .then((res)=>{
      window.localStorage.setItem('token', res.data.token)
      history.push('/admin')
    })
    .catch((err)=>{
      alert('Erro: Usuário não encontrado');
    });
  };
  
  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}  >VOLTAR</Button>
    </BackButtonContent>

    <Container>
        <Title>LOGIN</Title>
        <Field>
          <Input onChange={handleEmail} placeholder="Email"/>
          <Input onChange={handlePassword} type="password" placeholder="Senha"/>
        </Field>
        
      <ButtonContent>
        <Button onClick={login} > ENTRAR </Button>
      </ButtonContent>
    </Container>
   
    </div>
  );
}
