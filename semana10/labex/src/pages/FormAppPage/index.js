import React from "react";
import {goToListTripPage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent,ButtonContent } from './styles'

export default function FormAppPage() {
  const history = useHistory();
  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToListTripPage(history)}  >VOLTAR</Button>
    </BackButtonContent>
    Aqui temos a Pagina com Form de inscrição
    <ButtonContent>
      <Button> INSCREVA-SE </Button>
    </ButtonContent>
       
    </div>
  );
}
