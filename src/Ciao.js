import React from 'react';
//rsf rcc 
//stateless or functional components 

function Ciao(props) {
    return (
        <div>
            <i>{props.sad} ciao!!!!!! bella! {props.name} de {props.from} </i>
            <button className="button is-rounded my-class is-info is-large">{props.sad} </button>

        </div>
    );
}

export default Ciao;