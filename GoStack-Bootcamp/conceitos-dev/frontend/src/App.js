import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects ] = useState([ 'Desenvolvimento de app', 'Front-end web']);

  // useStates retorna um array com 2 posições
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  function handleAppProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]); //Alterando o valor indiretamente 
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAppProject}>Adicionar projeto</button>
    </>
  );
}

export default App;