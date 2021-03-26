import React from "react";
import CreatePlaylist from "./pages/CreatePlaylist";
import ListPlaylist from "./pages/ListPlaylists";
// import listPlaylist from "./pages/ListPlaylists";
// import axios from "axios";
// import styled from "styled-components";

export default class App extends React.Component {
  state = {
    page: true
  };
  changeToCreate = () => {
    this.setState({ page: true });
  };
  changeToList = () => {
    this.setState({ page: false });
  };
  render() {
    const renderPage = () => {
      if (this.state.page) {
        return <CreatePlaylist list={this.changeToList} />;
      } else {
        return <ListPlaylist create={this.changeToCreate} />;
      }
    };
    return <div>{renderPage()}</div>;
  }
}
