import React from "react";
import {Container, HomeImg, LogoImg, AdminButtonContent, AdminButton, TripButton,TripButtonContent} from './styles'
import {useHistory} from "react-router-dom"
import { goToListTripPage, goToLoginPage } from "../../routes/coordinator";
import Logo from '../../images/X.png'

export default function HomePage() {
  const history = useHistory();
  
  return (
    <Container>
      <HomeImg>
         <div>
            <LogoImg src={Logo}/>
         </div>
         <AdminButtonContent>
         <AdminButton onClick={() => goToLoginPage(history)}>ADMIN LOGIN</AdminButton>
         </AdminButtonContent>
      </HomeImg>
      <TripButtonContent>
        <TripButton onClick={() => goToListTripPage(history)} >VER VIAGENS</TripButton>
      </TripButtonContent>
    </Container>
  );
}
