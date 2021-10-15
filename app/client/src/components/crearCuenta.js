import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FormularioDeRegistro from './routes/crearCuenta/formularioRegistro';
import logo from './../img/png/logo.png';
import './../sass/crearCuenta.sass';

const CrearCuenta = () => {
	return (
		<BrowserRouter>
			<body>
				<header>
					<img src={logo} alt="logo" className="logo"></img>
				</header>
				<main>
					<div className="contenedorTitulo">
						<div>
							<h1 className="titulo">Crea tu cuenta Cloud</h1>
						</div>
					</div>
					<FormularioDeRegistro />
				</main>
			</body>
		</BrowserRouter>
	);
};

export default CrearCuenta;
