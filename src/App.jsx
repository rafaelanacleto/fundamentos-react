import React from 'react';
import './App.css';

import { Card } from './components/layout/Card'
import { CompPar } from './components/basicos/CompPar'
import { Aleatorio } from './components/basicos/Aleatorio'
import { Conteudo } from './components/basicos/Conteudo'
import { Familia } from './components/basicos/Familia';

const App = () => {

  return (
    <div className='apps'>
      <div className="cards">
        <Card titulo="#04 - Familia" color="#F00">
          <Familia />
        </Card>
        <Card titulo="#03 - Aleatório" color="#3C0">
          <Aleatorio max={2} min={1} />
        </Card>
        <Card titulo="#02 - Com Parametros" color="#CB0">
          <CompPar titulo="Rafael" subtitulo="Anacleto" />
        </Card>
        <Card titulo="#01 - Conteudos" color="#AA0">
          <Conteudo></Conteudo>
        </Card>
      </div>
    </div>
  )
}

export default App