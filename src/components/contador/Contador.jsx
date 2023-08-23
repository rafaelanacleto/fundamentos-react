import React from "react";
import { Display } from "./Display";

export default class Contador extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {            
            numero: parseInt(this.props.numeroInicial)
        };
    }

    increment = () => {
        this.setState({
            numero: this.state.numero + 1
        });
    };

    decrement = () => {
        if (this.state.numero > 0) {
            this.setState({
                numero: this.state.numero - 1
            });
        }
    };

    render() {
        return (
            <div>
               <Display numero={this.state.numero} />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}