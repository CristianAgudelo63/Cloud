import React from 'react';
import styled from 'styled-components';
import Header from './../Components/Home/header.js';
import ContenidoApp from './../Components/Home/main.js';
import Aside from './../Components/Home/aside.js';

const Home = () => {
  return (
    <body className='animate__animated animate__fadeIn'>
      <Header />
      <Main>
        <Aside />
        <ContenidoApp />
      </Main>
    </body>
  );
};

export default Home;

const Main = styled.div`
  display: grid;
  grid-template-columns: 18% 82%;
  grid-template-rows: auto;
  grid-template-areas: 'header header' 'aside main';
`;
