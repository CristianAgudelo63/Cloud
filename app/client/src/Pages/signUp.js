import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormularioDeRegistro from './../Components/SignUp/formularioRegistro';
import logo from './../Assets/Img/logo.png';

const SignUp = () => {
  return (
    <body>
      <Header className='animate__animated animate__bounceInDown'>
        <img src={logo} alt='logo' className='logo'></img>
      </Header>
      <Main className='animate__animated animate__bounceInUp'>
        <Contenedor>
          <h1>Crea tu cuenta Cloud</h1>
        </Contenedor>
        <FormularioDeRegistro />
        <Link to='/home' className='btn btnPrimario'>
          Crear Cuenta
        </Link>
      </Main>
    </body>
  );
};

export default SignUp;

const Header = styled.div`
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    width: 250px;
  }
`;

const Main = styled.div`
  background: var(--fondoSegundario);
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px #20212457;
  height: 60vh;
`;

const Contenedor = styled.div`
  background: #0099ff;
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  text-align: center;
  h1 {
    color: #fff;
  }
`;
