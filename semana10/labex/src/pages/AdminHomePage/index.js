import React, { useState } from "react";
import { goToCreateTripPage, goToHomePage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Button, BackButtonContent, ButtonContent, ButtonExit } from "./styles";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

export default function AdminHomePage() {
  const history = useHistory();
  useProtectedPage();
  const listTrips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips",
    []
  );

  const goToDetailPage = (id) => {
    history.push(`/admin/viagens/${id}`);
  };
  // deleteTrip = (id) => {
  //   axios
  //     .delete(
  //       `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips/${id}`,
  //       {
  //         headers: {
  //           Content-Type: "application/json",
  //           auth:
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k",
  //         },
  //       }
  //     )

  //     .then((res) => {
  //       listTrips();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}>VOLTAR</Button>
      </BackButtonContent>
      {listTrips.map((trip) => {
        return (
          <button onClick={() => goToDetailPage(trip.id)} key={trip.id}>
            <div>
              <h3>{trip.name}</h3>
            </div>
          </button>
        );
      })}
      <ButtonContent>
        <Button onClick={() => goToCreateTripPage(history)}>
          CRIAR VIAGEM
        </Button>
        <ButtonExit onClick={logout}> SAIR </ButtonExit>
      </ButtonContent>
    </div>
  );
}
