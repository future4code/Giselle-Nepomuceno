import React,{useState, useEffect}  from "react";
import axios from 'axios';
import {goToFormAppPage, goToHomePage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';
import {Button, BackButtonContent,ButtonContent } from './styles'

export default function ListTripPage() {
  const history = useHistory();
  const [listTrips, setListTrips] = useState([])
  
  useEffect(()=>{
    getListTrip()
  }, [])

  const getListTrip = () => {
    axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips')
    .then((res)=> {
      setListTrips(res.data.trips)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}  >VOLTAR</Button>
    </BackButtonContent>
    <div>
      {listTrips.map((trip)=>{
        return (
          <div>
              <h3>{trip.name}</h3>
              <p>{trip.description}</p>
              <p>{trip.planet}</p>
              <p>{trip.durationInDays}</p>
              <p>{trip.date}</p>
          </div>
        )
      })}
    </div>

    <ButtonContent>
      <Button onClick={() =>  goToFormAppPage(history)}> VIAJE AGORA </Button>
    </ButtonContent>
    </div>
  );
}
