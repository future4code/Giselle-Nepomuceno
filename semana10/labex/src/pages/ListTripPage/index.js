import React from "react";
import {goToFormPageApp, goToHomePage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent, } from './styles'

export default function ListTripPage() {
  const history = useHistory();
  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}  >VOLTAR</Button>
    </BackButtonContent>
    <Button onClick={() =>  goToFormPageApp(history)}> INSCREVER-SE</Button>

        Aqui temos a Pagina com as viagens para que possam ser escolhidas
    </div>
  );
}
