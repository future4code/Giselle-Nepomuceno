import React from "react";
import {
  Button,
  ButtonContent,
  Title,
  Text,
  Img,
  TextContent,
  ImgContent,
} from "./styles";
import ErrorImg from "../../images/Error.gif";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

export default function ErrorPage() {
  const history = useHistory();
  return (
    <div>
      <Title> Erro 404 </Title>

      <ImgContent>
        <Img src={ErrorImg} />
      </ImgContent>

      <TextContent>
        <Text>
          Ops, a página não foi encontrada! Mas não precisa ficar triste tem
          muitas postagens pra ver ainda!
        </Text>
      </TextContent>

      <ButtonContent>
        <Button onClick={() => goToHomePage(history)}>
          IR PARA PAGINA INICIAL
        </Button>
      </ButtonContent>
    </div>
  );
}
