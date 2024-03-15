import React from "react";
import "./App.css";

import { Aleatorio } from "./components/basicos/Aleatorio";
import { CompPar } from "./components/basicos/CompPar";
import { Conteudo } from "./components/basicos/Conteudo";
import { Familia } from "./components/basicos/Familia";
import { Card } from "./components/layout/Card";
import { ListaAlunos } from "./components/repeticao/ListaAlunos";
import { TabelaProdutos } from "./components/repeticao/TabelaProdutos";
import { Input } from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import { MegaSena } from "./components/mega/MegaSena";
import Header from "./components/basicos/Header";

const App = () => {
  return (
    <div className="apps">
      <Header/>
      <div className="cards">
        <Card titulo="#01 - Conteudos" color="#AA0">
          <Conteudo></Conteudo>
        </Card>
        <Card titulo="#02 - Com Parametros" color="#CB0">
          <CompPar titulo="Rafael" subtitulo="Anacleto" />
        </Card>
        
      </div>
    </div>
  );
};

export default App;
