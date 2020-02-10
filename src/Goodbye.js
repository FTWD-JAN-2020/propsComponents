import React, { Component } from 'react';
import Ciao from './Ciao'
//class component or stateful 

class Goodbye extends Component {
    render() {
        return (
            <div>
                <h1>Goodbye!!</h1>
                <Ciao 
                    name="francesca" 
                    from="Gianoli"
                    sad= { this.props.emoji }
                />
            </div>
        );
    }
}

export default Goodbye;