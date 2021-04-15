import React from "react";
import { goToAdminHomePage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent,ButtonContent, ButtonCreate } from './styles'
import {useProtectedPage} from '../../hooks/useProtectedPage'

export default function CreateTripPage() {
  const history = useHistory();
  useProtectedPage();
  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToAdminHomePage(history)}  >VOLTAR</Button>
    </BackButtonContent>
      Pagina para que o admin possa criar uma viagem nova
    <ButtonContent>
      <ButtonCreate > CRIAR </ButtonCreate>
    </ButtonContent>
    </div>
  );
}
