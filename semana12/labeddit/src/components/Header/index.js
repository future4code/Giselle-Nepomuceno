import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory("");
  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <Container>
      <div>
        <h4>Logo</h4>
      </div>
      <div>
        {!token ? (
          <button onClick={() => history.push("/")}>Login</button>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </Container>
  );
}

export default Header;
