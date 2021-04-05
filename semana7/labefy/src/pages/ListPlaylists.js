import React from "react";
import axios from "axios";
import { axiosConfig, url } from "../parameters";
// import styled from "styled-components";

export default class ListPlaylist extends React.Component {
  state = {
    playlists: []
  };
  componentDidMount() {
    this.getAllPlaylists();
  }
  getAllPlaylists = () => {
    axios
      .get(url, axiosConfig)
      .then((res) => {
        console.log(res.data.result.list);
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err);
        alert("ERRO durante carregamento das playlists");
      });
  };

  deletePlaylists = (id) => {
    if (window.confirm("Deseja mesmo deletar o usuário?")) {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        axiosConfig
      )
      .then((res) => {
        this.getAllPlaylists();
        alert("Playlist deletada com Sucesso");
      })
      .catch((err) => {
        console.log(err);
        alert("Ocorreu um erro ao deletar a playlist");
      });
    }
  };
  render() {
    const playlistList = this.state.playlists.map((playList) => (
      <p key={playList.id}>
        {playList.name}{" "}
        <button onClick={()=>{this.deletePlaylists(playList.id)}}> Deletar</button>
      </p>
    ));
    return (
      <div>
        <h1>Labefy</h1>
        <button onClick={this.props.create}>Criar Nova Playlist</button>
        <h2>Todas as Playlist</h2>
        {this.state.playlists.length > 0 ? (
          <div>{playlistList}</div>
        ) : (
          <p> Carregando ... </p>
        )}
      </div>
    );
  }
}
