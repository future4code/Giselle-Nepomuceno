import React from "react";
import "./styles.css";
import Home from "./components/Home";
import Login from "./components/Login";

export default class App extends React.Component {
  state = {
    estaLogado: false
  };

  fazerLogin = () => {
    this.setState({ estaLogado: true });
  };

  fazerLogout = () => {
    this.setState({ estaLogado: false });
  };

  render() {
    const renderizaTelaCorreta = () => {
      if (this.state.estaLogado) {R
        return <Home  logout={this.fazerLogout}/>;
      } else {
        return <Login login={this.fazerLogin} />;
      }
    };
    return <div className="App">{renderizaTelaCorreta()}</div>;
  }
}
