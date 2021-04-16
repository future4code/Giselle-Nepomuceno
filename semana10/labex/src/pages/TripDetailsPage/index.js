import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Button, BackButtonContent, Title } from "./styles";
import { goToAdminHomePage } from "../../routes/coordinator";

export default function TripDetailsPage() {
  useProtectedPage();
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getTripDetail(params.id);
  }, []);

  useEffect(() => {
    getCandidates();
  }, []);
  candidates.map((candidate) => {
    console.log(candidate.name);
  });

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

  const getCandidates = () => {
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
        setCandidates(res.data.trip.candidates);
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
        <Title>{trip.name}</Title>
        <p> Nome: {trip.name}</p>
        <p> Descrição: {trip.description}</p>
        <p> Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
      </div>
      <div>
        <h2> Candidatos Pendentes</h2>
        <div>
          {candidates.map((candidate) => {
            <div>{candidate.name}</div>;
          })}
        </div>
      </div>
      <div>
        <h2> Candidatos Aprovados</h2>
      </div>
    </div>
  );
}
