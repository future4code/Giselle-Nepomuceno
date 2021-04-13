import React from "react";
import {useHistory} from 'react-router-dom';
import {BackButton, BackButtonContent} from './styles';


export default function BackPage() {
    const history = useHistory();
  return (
    <BackButtonContent>
        <BackButton onClick={() => history.goBack()} >VOLTAR</BackButton>
    </BackButtonContent>
    // Desisti de usar este componente uma vez que ao tentar usa-lo com .goback se por alguma razão 
    // o usuário decidir salvar a pagina no favoritos ele não voltara pra pagina anteriormente acessada
  );
}
