import React, { useState } from "react";
import axios from "axios";
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

  const deleteTrip = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        listTrips();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <div>
            <button onClick={() => goToDetailPage(trip.id)} key={trip.id}>
              <div>
                <h3>{trip.name}</h3>
              </div>
            </button>
            <button
              onClick={() => {
                deleteTrip(trip.id);
              }}
            >
              X
            </button>
          </div>
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
