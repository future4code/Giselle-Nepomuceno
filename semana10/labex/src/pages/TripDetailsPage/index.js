import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Button, BackButtonContent, Title } from "./styles";
import { goToAdminHomePage } from "../../routes/coordinator";

export default function TripDetailsPage() {
  useProtectedPage();
  const [trip, setTrip] = useState({});
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getTripDetail(params.id);
  }, []);

  const getTripDetail = () => {
    const token = window.localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decideCandidate = (candidateId, decision) => {
    const token = window.localStorage.getItem("token");
    const tripId = trip.id;
    const body = { approve: decision };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        getTripDetail();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToAdminHomePage(history)}>VOLTAR</Button>
      </BackButtonContent>
      <div>
        <h2>{trip.name}</h2>
        <p> Nome: {trip.name}</p>
        <p> Descrição: {trip.description}</p>
        <p> Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
      </div>
      <div>
        <h2> Candidatos Pendentes</h2>
        <div>
          {trip.candidates && trip.candidates.length > 0 ? (
            trip.candidates &&
            trip.candidates.map((candidate) => {
              return (
                <div>
                  <p>{candidate.name}</p>
                  <button onClick={() => decideCandidate(candidate.id, true)}>
                    ✅
                  </button>
                  <button onClick={() => decideCandidate(candidate.id, false)}>
                    ❌
                  </button>
                </div>
              );
            })
          ) : (
            <p> Não há candidatos</p>
          )}
        </div>
      </div>
      <div>
        <h2> Candidatos Aprovados</h2>
        {trip.approved && trip.approved.length > 0 ? (
          trip.approved &&
          trip.approved.map((candidate) => {
            return (
              <div>
                <p>{candidate.name}</p>
              </div>
            );
          })
        ) : (
          <p> Não há candidatos aprovados</p>
        )}
      </div>
    </div>
  );
}
