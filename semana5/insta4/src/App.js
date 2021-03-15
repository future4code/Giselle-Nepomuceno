import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Paula Brints'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'Bianca Rowx'}
            fotoUsuario={'https://picsum.photos/id/1014/50/50'}
            fotoPost={'https://picsum.photos/id/124/200/150'}
          />
        </div>
        
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Laura Blur'}
            fotoUsuario={'https://picsum.photos/id/1005/50/50'}
            fotoPost={'https://picsum.photos/id/1013/200/150'}
          />
        </div>
      </div>
      
    );
  }
}

export default App;
