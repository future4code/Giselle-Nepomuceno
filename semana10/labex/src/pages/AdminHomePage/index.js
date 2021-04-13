import React from "react";
import { goToCreateTripPage, goToHomePage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent,ButtonContent, ButtonExit } from './styles'

export default function AdminHomePage() {
  const history = useHistory();
  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}  >VOLTAR</Button>
    </BackButtonContent>
       Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
     
    <ButtonContent>
      <Button onClick={() =>  goToCreateTripPage(history)}> CRIAR VIAGEM </Button>
      <ButtonExit onClick={() => goToHomePage(history)}> SAIR </ButtonExit>
    </ButtonContent>
    </div>
  );
}
