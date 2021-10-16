import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import FormularioDeRegistro from './routes/crearCuenta/formularioRegistro';
import logo from './../img/png/logo.png';

const CrearCuenta = () => {
	return (
		<BrowserRouter>
			<body>
				<Header>
					<img src={logo} alt="logo" className="logo"></img>
				</Header>
				<Main>
					<Contenedor>
						<h1>Crea tu cuenta Cloud</h1>
					</Contenedor>
					<FormularioDeRegistro />
				</Main>
			</body>
		</BrowserRouter>
	);
};

export default CrearCuenta;

const Header = styled.div`
	height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
	.logo{
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
	h1{
		color: #fff;
	}
`;