import React from "react";
import {goToFormPageApp } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {BackButton, BackButtonContent} from './styles'

export default function ListTripPage() {
  const history = useHistory();
  return (
    <div>
      <BackButtonContent>
        <BackButton onClick={() => history.goBack()}  >VOLTAR</BackButton>
    </BackButtonContent>
    <BackButton onClick={() =>  goToFormPageApp (history)}> INSCREVER-SE</BackButton>

        Aqui temos a Pagina com as viagens para que possam ser escolhidas
    </div>
  );
}
