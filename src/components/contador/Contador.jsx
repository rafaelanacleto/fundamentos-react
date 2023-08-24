import React from "react";
import { Display } from "./Display";
import { Botoes } from "./Botoes";
import { PassoForm } from "./PassoForm";

export default class Contador extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {            
            numero: parseInt(this.props.numeroInicial),
            passo: this.props.numeroInicial || 0
        };
    }

    increment = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    };

    decrement = () => {
        if (this.state.numero > 0) {
            this.setState({
                numero: this.state.numero - this.state.passo
            });
        }
    };
    
    quandoMudar = (e) =>{
        this.setState({
            passo: +e.target.value
        });
    }

    render() {
        return (
            <div>
                <Display numero={this.state.numero} />
                <PassoForm  passo={this.state.passo} quandoMudar={this.quandoMudar} />
                <Botoes increment={this.increment} decrement={this.decrement}/>

              
            </div>
        )
    }
}