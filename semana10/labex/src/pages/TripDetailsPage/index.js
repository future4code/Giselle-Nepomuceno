import React from "react";
import {useProtectedPage} from '../../hooks/useProtectedPage'

export default function TripDetailsPage() {
  useProtectedPage();
  return (
    <div>
      Pagina de Detalhes Para o ADM ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
    </div>
  );
}
