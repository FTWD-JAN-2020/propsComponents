import React, { Component } from 'react';
import Whatsup from './Whatsup'

//basic javascript 
/*
adsfadsf

*/
class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!!!  </h1>
                <p>Lorem ipsum yadayadaydaa</p>
                <Whatsup 
                    name="Isaac"
                    from="South Dakota"
                    happy = {this.props.emoji}
                />
                
            </div>
        );
    }
}



export default Welcome;