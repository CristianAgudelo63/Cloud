import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from './../../../img/png/logo.png';

const Header = () => {
	return (
		<div className="header">
			<div className="headerLogo">
				<img src={logo} alt="logo" className="logo"></img>
			</div>
			<div className="headerPrincipal">
				<div className="busqueda">
					<div className="contenedorIcono">
						<FontAwesomeIcon icon={faSearch} className="iconoBusqueda" />
					</div>
					<input
						className="input barraBusqueda"
						type="text"
						placeholder="Buscar archivo o carpeta"
					></input>
				</div>
			</div>
			<div className="perfil">
				<FontAwesomeIcon icon={faUserCircle} className="i-usuario" />
			</div>
		</div>
	);
};

export default Header;
