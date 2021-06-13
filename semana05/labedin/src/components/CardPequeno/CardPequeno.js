import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <div>
                <p><span>{props.emailTitle}</span>{ props.email }</p>
                <p><span>{props.enderecoTitle}</span>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;