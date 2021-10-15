import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudDownloadAlt,
	faFolderPlus,
	faPlus,
	faShareAlt,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Ventana from './ventanaModal';
import SubirArchivos from './subirArchivos'
import Eliminar from './eliminar'
import Descargar from './descargar'
import CrearCarpeta from './crearCarpeta';
import Compartir from './compartir'

const Submenu = () => {

	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [estadoModal2, cambiarEstadoModal2] = useState(false);
	const [estadoModal3, cambiarEstadoModal3] = useState(false);
	const [estadoModal4, cambiarEstadoModal4] = useState(false);
	const [estadoModal5, cambiarEstadoModal5] = useState(false);

  return(
		<>
			<div className="submenu">
					<div className="items">
						<button className="btn btnItems" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
							<div className="icono">
								<FontAwesomeIcon icon={faPlus} className="iconoSubmenu"/>
							</div>
							Subir
						</button>
						<button className="btn btnItems" onClick={() => cambiarEstadoModal2(!estadoModal2)}>
							<div className="icono">
								<FontAwesomeIcon icon={faFolderPlus} className="iconoSubmenu" />
							</div>
							Crear Carpeta
						</button>
						<button className="btn btnItems" onClick={() => cambiarEstadoModal3(!estadoModal3)}>
							<div className="icono">
								<FontAwesomeIcon icon={faTrash} className="iconoSubmenu" />
							</div>
							Eliminar
						</button>
						<button className="btn btnItems" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
							<div className="icono">
								<FontAwesomeIcon icon={faCloudDownloadAlt} className="iconoSubmenu" />
							</div>
							Descargar
						</button>
						<button className="btn btnItems" onClick={() => cambiarEstadoModal5(!estadoModal5)}>
							<div className="icono">
								<FontAwesomeIcon icon={faShareAlt} className="iconoSubmenu" />
							</div>
							Compartir
						</button>
					</div>
			</div>
			<Ventana
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo = "Subir"
			>
				<SubirArchivos />
			</Ventana>

			<Ventana
				estado={estadoModal2}
				cambiarEstado={cambiarEstadoModal2}
				titulo = "Crear Carpeta"
			>
				<CrearCarpeta />
			</Ventana>

			<Ventana
				estado={estadoModal3}
				cambiarEstado={cambiarEstadoModal3}
				titulo = "Eliminar"
			>
				<Eliminar />
			</Ventana>

			<Ventana
				estado={estadoModal4}
				cambiarEstado={cambiarEstadoModal4}
				titulo = "Descargar"
			>
				<Descargar />
			</Ventana>

			<Ventana
				estado={estadoModal5}
				cambiarEstado={cambiarEstadoModal5}
				titulo = "Compartir"
			>
				<Compartir />
			</Ventana>
		</>
  );
}

export default Submenu;