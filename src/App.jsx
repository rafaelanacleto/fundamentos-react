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

const App = () => {
  return (
    <div className="apps">
      <div className="cards">
        <Card titulo="#09 - Mega Sena" color="#2596be">
          <MegaSena intervalo={7} />
        </Card>
        <Card titulo="#08 - Class Contador" color="#F2A">
          <Contador numeroInicial={1} />
        </Card>
        <Card titulo="#07 - Input componente controlado" color="#CAF">
          <Input />
        </Card>
        <Card titulo="#06 - Tabela Produtos" color="#BFF">
          <TabelaProdutos />
        </Card>
        <Card titulo="#05 - Lista Alunos" color="#DE3">
          <ListaAlunos />
        </Card>
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
  );
};

export default App;
