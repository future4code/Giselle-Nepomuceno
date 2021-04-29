import React, { useEffect, useState } from "react";
import { Container, Img, Button, ButtonContent } from "./styles";
import { useHistory } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Logo2 from "../../images/logo2.png";

function Header() {
  const history = useHistory([]);
  const token = localStorage.getItem("token");

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };
  const login = () => {
    history.push("/login");
  };
  console.log(history);
  return (
    <Container>
      <div>
        <Img src={Logo} alt={"Logo"} onClick={() => history.push("/")} />
        <Img src={Logo2} alt={"Logo"} onClick={() => history.push("/")} />
      </div>
      <div></div>
      <div>
        {token && token ? (
          <ButtonContent>
            <Button onClick={logout}>Logout</Button>
          </ButtonContent>
        ) : (
          <ButtonContent>
            <Button onClick={login}>Login</Button>
          </ButtonContent>
        )}
      </div>
    </Container>
  );
}

export default Header;
