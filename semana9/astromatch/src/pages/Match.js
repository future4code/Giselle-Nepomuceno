import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Img = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

export default function Match(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, [matches]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
      )
      .then((res) => {
        setMatches([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Match">
      <button
        onClick={() => {
          props.change("Home");
        }}
      >
        Voltar Home
      </button>
      <h1>Veja aqui seus Matchs</h1>
      {matches.map((match) => {
        return (
          <div>
            <Img src={match.photo} alt={"foto perfil"} />
            {match.name}
          </div>
        );
      })}
      <button
        onClick={() => {
          deleteMatches();
        }}
      >
        {" "}
        Limpar Matches{" "}
      </button>
      <h2>uiii ele gosta de você</h2>
    </div>
  );
}
