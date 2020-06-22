const express = require('express'); //Comportando o express dentro de uma variável 
const { response } = require('express');

const app = express(); //Declarando uma variável que e igual a express

app.use(express.json()) //Adiciona uma rota que todas as funçoes vão passar

/**
 * Métodos HTTP
 * 
 * - GET: Buscar informações do back-end
 * - POST: Criar uma informação no back-end
 * - PUT/PATH: Alterar uma informação no back-end
 *    - PUT: Utilizado para alterar varias informações
 *    - PATH: Utilizado para alter informações específicas
 * - DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros
 * 
 * - Query Params: Filtros e paginação
 * - Route Params: Identificar recursos (Atualizar/Deletar)
 * - Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

app.get('/projects', (request, response) => { //Metodo get que recebe dois parâmetros.
  //Um endreço, podendo ser '/' e o recurso que usuário quer acessar '/projects'.
  //E uma função que recebe dois parâmetros resq e resp.
  //response permite retornar resposta ao usuário e request guarda requisição do usuário.
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);
  return response.json([ //json deve sempre retornado em array [] ou objeto {}
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => { //Para alterar utilizamos um id
  const { id } = request.params;

  console.log(id)
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => { //Para deletar utilizamos um id
  return response.json([
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.listen(3333, () => { //adiciona uma porta, podemos escolher qualquer porta acima da porta 80.
  //Como segundo parâmetro, adicionamos um função automática que mostra quando o servidor estiver no ar
  console.log('🚀️ Back-end started!');
}); 