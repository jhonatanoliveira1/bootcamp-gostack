const express = require('express'); //Comportando o express dentro de uma variável 
const { uuid } = require('uuidv4'); //identificador único universal

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

const projects = [];

app.get('/projects', (request, response) => { //Metodo get que recebe dois parâmetros.
  //Um endreço, podendo ser '/' e o recurso que usuário quer acessar '/projects'.
  //E uma função que recebe dois parâmetros resq e resp.
  //response permite retornar resposta ao usuário e request guarda requisição do usuário.

  const { title } = request.query;

  const results = title //Ver se o título do usuario foi preenchido
    ? projects.filter(project => project.title.includes(title)) //Verifica se no title do project inclui a palavra filtrada em title
    : projects;

  return response.json(results); //json deve sempre retornado em array [] ou objeto {}    
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project)
  
  return response.json(project);
});

app.put('/projects/:id', (request, response) => { //Para alterar utilizamos um id
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => //findIndex procura a possição do objeto
    project.id === id
  );

  if(projectIndex < 0) { //verificação
    return response.status(400).json({ error: 'Project not found.'});
  };

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project; //Substitui o valor que esta armazenado dentro da posição projectIndex
  
  return response.json(project); //Retorna o objeto atualizado
});

app.delete('/projects/:id', (request, response) => { //Para deletar utilizamos um id
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => //findIndex procura a possição do objeto
    project.id === id
  );

  if(projectIndex < 0) { //verificação
    return response.status(400).json({ error: 'Project not found.'});
  };

  projects.splice(projectIndex, 1) //splice retira uma informação dentro do array 

  return response.status(204).send(); //retonar em branco
});

app.listen(3333, () => { //adiciona uma porta, podemos escolher qualquer porta acima da porta 80.
  //Como segundo parâmetro, adicionamos um função automática que mostra quando o servidor estiver no ar
  console.log('🚀️ Back-end started!');
}); 