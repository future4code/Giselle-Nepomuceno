import React from "react";
import { goToCreateTripPage, goToHomePage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent,ButtonContent, ButtonExit } from './styles'
import {useProtectedPage} from '../../hooks/useProtectedPage'

export default function AdminHomePage() {
  const history = useHistory();
  useProtectedPage();
  
  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}  >VOLTAR</Button>
    </BackButtonContent>
       Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
     
    <ButtonContent>
      <Button onClick={() =>  goToCreateTripPage(history)}> CRIAR VIAGEM </Button>
      <ButtonExit onClick={logout}> SAIR </ButtonExit>
    </ButtonContent>
    </div>
  );
}
