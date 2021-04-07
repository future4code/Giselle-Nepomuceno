import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(props) {
  const [profile, setprofile] = useState([]);
  const [choose, setChoose] = useState("");

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
      )
      .then((res) => {
        setprofile(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const choosePerson = () => {
    const body = { id: profile.id, choice: true };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
        body
      )
      .then((res) => {
        setChoose(res.data);
        alert("Você deu um match");
        getProfile();
      })
      .catch((err) => {
        console.log(err);
        alert("Ocorreu um problema");
      });
  };

  return (
    <div className="Home">
      <h1>Página Principal</h1>
      <button
        onClick={() => {
          props.change("Match");
        }}
      >
        Veja seus Matchs
      </button>

      <h2>Olha quanta gente Bonita</h2>
      <div>
        <img
          src={profile.photo}
          alt={"Foto do perfil"}
          style={{ width: "300px" }}
        />
        <div>
          <h2>{profile.name} </h2>
          <h2>{profile.age} </h2>
        </div>
        <h4>{profile.bio}</h4>
      </div>
      <button
        onClick={() => {
          getProfile();
        }}
      >
        Pular
      </button>
      <button
        onClick={() => {
          choosePerson();
        }}
      >
        Dar Match
      </button>
    </div>
  );
}
