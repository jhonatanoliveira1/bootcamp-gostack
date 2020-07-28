import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects ] = useState([]);

  // useStates retorna um array com 2 posições
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAppProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]); //Alterando o valor indiretamente 
    
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Jhonatan de Oliveira"
    });

    const projetc = response.data;

    setProjects([...projects, projetc]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAppProject}>Adicionar projeto</button>
    </>
  );
}

export default App;