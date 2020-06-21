const express = require('express'); //Comportando o express dentro de uma variável 
const { response } = require('express');

const app = express(); //Declarando uma variável que e igual a express

/**
 * Métodos HTTP
 * 
 * - GET: Buscar informações do back-end
 * - POST: Criar uma informação no back-end
 * - PUT/PATH: Alterar uma informação no back-end
 *    - PUT: Utilizado para alterar varias informações
 *    - PATH: Utilizado para alter informações especificas
 * - DELETE: Deletar uma informação no back-end
 */

app.get('/projects', (request, response) => { //Metodo get que recebe dois parâmetros.
  //Um endreço, podendo ser '/' e o recurso que usuário quer acessar '/projects'.
  //E uma função que recebe dois parâmetros resq e resp.
  //response permite retornar resposta ao usuário e request guarda requisição do usuário.
  return response.json([ //json deve sempre retornado em array [] ou objeto {}
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => { //Para alterar utilizamos um id
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