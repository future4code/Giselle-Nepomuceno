import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'


import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeMarkBranco from '../../img/bookmark-white.svg'
import iconeMarkPreto from '../../img/bookmark-black.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    mark: false,
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,



  }

  

  onClickCurtida = () => {
    if (this.state.curtido === false) {
      this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })}else{
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas  + -1
      })
    }
  }

  onClickMark = () => {
    if (this.state.mark === false) {
      this.setState({
      mark: true
    })}else{
      this.setState({
        mark: false
      })
    }
  }
  


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMark

    if(this.state.mark) {
      iconeMark = iconeMarkPreto
    } else {
      iconeMark = iconeMarkBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    
    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
         
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <IconeComContador
          icone={iconeMark}
          onClickIcone={this.onClickMark}
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post