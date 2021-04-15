import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

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

  return (
    <div>
      <h1>GetTripDetail Page</h1>
      <h2>{trip.name}</h2>
      <p>{trip.date}</p>
      <p>{trip.description}</p>
    </div>
  );
}
