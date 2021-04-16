import React, { useState } from "react";
import { goToListTripPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import {
  Button,
  BackButtonContent,
  ButtonContent,
  Input,
  Fields,
  Select,
  Title,
} from "./styles";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";

export default function FormAppPage() {
  const history = useHistory();
  const initialForm = {
    chooseTrip: "",
    name: "",
    age: "",
    applicationTrip: "",
    profission: "",
    country: "",
  };

  const FormApp = () => {
    const [form, onChangeForm, resetForm] = useForm(initialForm);
    const listTrips = useRequestData(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips",
      []
    );

    // listTrips.map((trip) => {
    //   return console.log(trip.name);
    // });

    const applyToTrip = (id) => {
      const body = {
        chooseTrip: form.chooseTrip,
        name: form.name,
        age: form.age,
        applicationTrip: form.applicationTrip,
        profission: form.profission,
        country: form.country,
      };

      axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips/${id}/apply`,
          body
        )
        .then((res) => {
          alert("Formulário enviado com sucesso");
          history.push("/viagens");
        })
        .catch((err) => {
          console.log("Erro interno");
        });
    };

    const handleClick = (e) => {
      e.preventDefault();
      resetForm();
      applyToTrip();
    };

    return (
      <div>
        <form onSubmit={handleClick}>
          <Fields>
            <Select
              required
              name="chooseTrip"
              onChange={onChangeForm}
              placeholder="Escolha sua Viagem"
            >
              {listTrips.map((trip) => {
                return <option value={trip.id}>{trip.name}</option>;
              })}
              <option value disabled selected>
                Selecione uma opção
              </option>
            </Select>
            <Input
              required
              name="name"
              onChange={onChangeForm}
              value={form.name}
              placeholder="Nome"
            />
            <Input
              required
              name="age"
              onChange={onChangeForm}
              type="number"
              value={form.age}
              placeholder="Idade"
              max={18}
            />
            <Input
              required
              name="applicationTrip"
              onChange={onChangeForm}
              type="text"
              value={form.applicationTrip}
              placeholder="Texto de candidatura"
              max={30}
            />
            <Input
              required
              name="profission"
              onChange={onChangeForm}
              type="text"
              value={form.profission}
              placeholder="Profissão"
              max={10}
            />
            <Input
              required
              name="country"
              onChange={onChangeForm}
              type="text"
              value={form.country}
              placeholder="País de origem"
              max={10}
            />
          </Fields>
          <ButtonContent>
            <Button onClick={() => applyToTrip(form.id)} key={form.id}>
              INSCREVA-SE
            </Button>
          </ButtonContent>
        </form>
      </div>
    );
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToListTripPage(history)}>VOLTAR</Button>
      </BackButtonContent>
      <Title>INSCREVA-SE PARA UMA VIAGEM</Title>
      {FormApp()}
    </div>
  );
}
