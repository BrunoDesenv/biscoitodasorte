import './App.css';
import { Component } from 'react';
import Botao from './Botao'
import data from './data.json';

class App extends Component
{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = data.frases;
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render(){
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

export default App;
