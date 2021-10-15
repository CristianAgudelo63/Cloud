import React from 'react';
import Submenu from './main/subMenu';
import Carpeta from './../../../img/png/folder-home.png';

const Main = () => {
	return (
		<div className="main">
			<Submenu />
			<div className="contenido">
				<div className="home">
					<img src={Carpeta} alt="Carpeta Principal"></img>
					<input type="text" desabled value="Mi Unidad"></input>
				</div>
			</div>
		</div>
	);
};

export default Main;