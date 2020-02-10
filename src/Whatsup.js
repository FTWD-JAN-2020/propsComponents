import React, { Component } from 'react';

class Whatsup extends Component {
    render() {
        return (
            <div>
                <h4> {this.props.happy} Whats up?! {this.props.name} from {this.props.from} </h4>
            </div>
        );
    }
}

export default Whatsup;