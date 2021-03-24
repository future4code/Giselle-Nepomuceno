import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components";


const ContainerForm = styled.div`
 display:flex;
  margin: 20px 0;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;


class App extends React.Component {
  state = {
    postagem: [
      {
        nomeUsuario: 'Paula Brints',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Bianca Rowx',
        fotoUsuario: 'https://picsum.photos/id/1005/50/50',
        fotoPost: 'https://picsum.photos/id/124/200/150'
      },
      {
        nomeUsuario:'Laura Blur',
        fotoUsuario: 'https://picsum.photos/id/1005/50/50',
        fotoPost: 'https://picsum.photos/id/1013/200/150'
      }
    ],

    valorNomeUsuario: '',
    valorFotoUsuario: '',
    valorFotoPost: ''
  }
 
  adicionaPost = () => {

    const novoPost= {
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost
    };
    console.log(novoPost)
    const novaPost = [...this.state.postagem, novoPost];
    this.setState({ postagem: novaPost });
    this.setState({ valorNomeUsuario: "" });
    this.setState({ valorFotoUsuario: "" });
    this.setState({ valorFotoPost: "" });
  };

  onChangeNomeUsuario = (event) => {
    this.setState({ valorNomeUsuario: event.target.value });
  };
  onChangeFotoUsuario = (event) => {
    this.setState({ valorFotoUsuario: event.target.value });
  };
  onChangeFotoPost= (event) => {
    this.setState({ valorFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.postagem.map((post) => {
 
      return (
        <div key={post.nomeUsuario} className={'app-container'}>
          <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost= {post.fotoPost}
          />
        </div>
      );
    });
    return(
      <div>
        
        <ContainerForm>
        <div>
          <input
            value={this.state.valorNomeUsuario}
            onChange={this.onChangeNomeUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Link da Foto de Perfil"}
          />
          <input
            value={this.state.valorFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={"Link do Post"}
          />
          <button onClick={this.adicionaPost}>Postar</button>
        </div>
        </ContainerForm>
        <div>
          {listaDePosts}
        </div>
      </div>
    );
  }
}

export default App;
