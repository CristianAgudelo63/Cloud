import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Formulario from '../Components/SignIn/formulario.js';
import logo from '../Assets/Img/logo.png';

function SignIn() {
  return (
    <>
      <Header className='animate__animated animate__fadeInDown'>
        <img src={logo} alt='logo' />
      </Header>

      <Main className='animate__animated animate__fadeInUp'>
        <Contenedor>
          <h1>Ingresa a tu cuenta Cloud</h1>
        </Contenedor>
        <Formulario />
        <Link to='/Cloud-Client/home' className='btn btnPrimario'>
          Ingresar
        </Link>
        <Link to='/Cloud-Client/signUp' className='btn btnSegundario'>
          Crear Cuenta
        </Link>
      </Main>
    </>
  );
}

export default SignIn;

const Header = styled.div`
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
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
