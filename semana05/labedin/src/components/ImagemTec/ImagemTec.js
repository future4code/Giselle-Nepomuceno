import React from 'react';
import './ImagemTec.css'

function ImagemTec(props) {
    return (
        <div className="image-tec-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemTec;