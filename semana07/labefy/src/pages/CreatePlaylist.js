import React from "react";
import axios from "axios";
import { axiosConfig, url } from "../parameters";
// import styled from "styled-components";

export default class CreatePlaylist extends React.Component {
  state = {
    inputPlaylistsName: ""
  };
  handleInputPlaylistName = (e) => {
    this.setState({ inputPlaylistsName: e.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylistsName
    };
    axios
      .post(url, body, axiosConfig)
      .then((res) => {
        this.setState({ inputPlaylistsName: "" });
        alert("Playlist criada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        alert("alguma coisa deu errada, tente outra vez mais tarde");
      });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Labefy</h1>
          <button onClick={this.props.list}>Ver todas as Playlists</button>
        </div>

        <h2>Crie sua Playlist</h2>
        <input
          onChange={this.handleInputPlaylistName}
          value={this.state.inputPlaylistsName}
        />
        <button onClick={this.createPlaylist}>Salvar</button>
      </div>
    );
  }
}
