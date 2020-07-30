import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/58116030?s=460&u=854457a74e21813388695c6ced32f091e6a1300b&v=4"
            alt="Jhonatan de Oliveira"
          />
          <div>
            <strong>jhonatanoliveira1/bootcamp-gostack</strong>
            <p>
              Bootcamp Gostack vai a fundo nas tecnologias NodeJS, ReactJS e
              React Native.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/58116030?s=460&u=854457a74e21813388695c6ced32f091e6a1300b&v=4"
            alt="Jhonatan de Oliveira"
          />
          <div>
            <strong>jhonatanoliveira1/bootcamp-gostack</strong>
            <p>
              Bootcamp Gostack vai a fundo nas tecnologias NodeJS, ReactJS e
              React Native.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/58116030?s=460&u=854457a74e21813388695c6ced32f091e6a1300b&v=4"
            alt="Jhonatan de Oliveira"
          />
          <div>
            <strong>jhonatanoliveira1/bootcamp-gostack</strong>
            <p>
              Bootcamp Gostack vai a fundo nas tecnologias NodeJS, ReactJS e
              React Native.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
