import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    playlists: [],
    inputValue: ""
  };

  componentDidMount() {
    this.getPlaylists();
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  getPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "amanda-rangel"
          }
        }
      )
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
        console.log(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputValue
    };
    axios
      .post(
        " https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "amanda-rangel"
          }
        }
      )
      .then((res) => {
        this.setState({inputValue: ''})
        this.getPlaylists()
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    const playlistsList = this.state.playlists.map((playlist) => (
      <li key={playlist.id}>{playlist.name}</li>
    ));
    return (
      <div className="App">
        <input
          placeholder={"Nome da playlist"}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.createPlaylist}>Criar playlist</button>
        {this.state.playlists.length > 0 ? (
          <ul>{playlistsList}</ul>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    );
  }
}
