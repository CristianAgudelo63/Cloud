import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudDownloadAlt,
	faFolderPlus,
	faPlus,
	faShareAlt,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import carpeta from './../../img/png/folder-home.png';

const Main = () => {
	return (
		<div className="main">
			<div className="submenu">
				<div className="items">
					<button className="btn btnItems">
						<div className="i">
							<FontAwesomeIcon icon={faPlus} className="i-submenu" />
						</div>
						Subir
					</button>
					<button className="btn btnItems">
						<div className="i">
							<FontAwesomeIcon icon={faFolderPlus} className="i-submenu" />
						</div>
						Crear Carpeta
					</button>
					<button className="btn btnItems">
						<div class="i">
							<FontAwesomeIcon icon={faTrash} className="i-submenu" />
						</div>
						Elimina
					</button>
					<button className="btn btnItems">
						<div className="i">
							<FontAwesomeIcon icon={faCloudDownloadAlt} className="i-submenu" />
						</div>
						Descargar
					</button>
					<button className="btn btnItems">
						<div className="i">
							<FontAwesomeIcon icon={faShareAlt} className="i-submenu" />
						</div>
						Compartir
					</button>
				</div>
			</div>
			<div className="contenido">
				<div class="home">
					<img src={carpeta} alt="Carpeta Principal"></img>
					<input type="text" desabled value="Mi Unidad"></input>
				</div>
			</div>
		</div>
	);
};

export default Main;
