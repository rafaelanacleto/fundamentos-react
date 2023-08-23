import React from "react";

export default class Contador extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.numeroInicial);
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
                <p>Valor State Numero {this.state.numero}</p>
                <hr />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}