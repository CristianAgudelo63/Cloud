import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Formulario from '../elementos/ingresar/formulario';
import logo from './../img/png/logo.png';
import './../sass/ingresar.sass';

const Ingresar = () => {
	return (
		<BrowserRouter>
			<body>
				<header>
					<img src={logo} alt="logo" className="logo"></img>
				</header>
				<main>
					<div className="contenedorTitulo">
						<div>
							<h1 className="titulo">Ingresa a tu cuenta Cloud</h1>
						</div>
					</div>
					<Formulario />
				</main>
			</body>
		</BrowserRouter>
	);
};

export default Ingresar;
