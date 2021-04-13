import React from "react";
import {goToFormAppPage, goToHomePage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent,ButtonContent } from './styles'

export default function ListTripPage() {
  const history = useHistory();
  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}  >VOLTAR</Button>
    </BackButtonContent>
    <ButtonContent>
      <Button onClick={() =>  goToFormAppPage(history)}> VIAJE AGORA </Button>
    </ButtonContent>
        Aqui temos a Pagina com as viagens para que possam ser escolhidas
    </div>
  );
}
