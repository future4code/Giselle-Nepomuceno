import React from "react";
import {Container, HomeImg, AdminButtonContent, AdminButton, TripButton,TripButtonContent} from './styles'
import {useHistory} from "react-router-dom"
import { goToListTripPage, goToLoginPage } from "../../routes/coordinator";

export default function HomePage() {
  const history = useHistory();
  

  return (
    <Container>
      <HomeImg>

         <div>
            {/* Aqui ficará a logo */}
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
