const express = require('express'); //Comportando o express dentro de uma variável 
const { response } = require('express');

const app = express(); //Declarando uma variável que e igual a express

app.get('/', (request, response) => { //Metodo get que recebe dois parâmetros.
  //Um endreço, podendo ser '/' e umma função que recebe dois parâmetros resq e resp.
  //response permite retornar várias resposta ao usuário e request guarda requisição do usuário.
  return response.json(
    { menssagen: 'Hello World' } //json deve sempre retornado em array [] ou objeto {}
  ) 
  
})  

app.listen(3333); //adiciona uma porta, podemos escolher qualquer porta acima da porta 80