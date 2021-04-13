import React from "react";
import {goToAdminHomePage, goToHomePage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent,ButtonContent } from './styles'

export default function LoginPage() {
  const history = useHistory();
  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}  >VOLTAR</Button>
    </BackButtonContent>
       Pagina de Login do Adm 
    <ButtonContent>
      <Button onClick={() =>  goToAdminHomePage(history)}> ENTRAR </Button>
    </ButtonContent>
   
    </div>
  );
}
