import React from "react";
import Header from "../../components/Header";
import { goToFeedPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
// import { Container } from './styles';

function HomePage() {
  const history = useHistory();

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeedPage(history);
    } else {
      history.push("/login");
    }
  };
  return (
    <div>
      <Header />
      <h1>Bem vindo ao labEddit!!!</h1>
      <button onClick={() => checkToken()}>Postagens</button>
    </div>
  );
}

export default HomePage;
