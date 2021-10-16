import React, {useState} from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudDownloadAlt,
	faFolderPlus,
	faPlus,
	faShareAlt,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Ventana from './ventanaModal';
import SubirArchivos from './subMenu/subirArchivos'
import Eliminar from './subMenu/eliminar'
import Descargar from './subMenu/descargar'
import CrearCarpeta from './subMenu/crearCarpeta';
import Compartir from './subMenu/compartir'
	
const Submenu = () => {

	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [estadoModal2, cambiarEstadoModal2] = useState(false);
	const [estadoModal3, cambiarEstadoModal3] = useState(false);
	const [estadoModal4, cambiarEstadoModal4] = useState(false);
	const [estadoModal5, cambiarEstadoModal5] = useState(false);

  return(
		<>
			<Contenedor>
					<div className="items">
						<Boton className="btn" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
							<Icono>
								<FontAwesomeIcon icon={faPlus} className="i"/>
							</Icono>
							Subir
						</Boton>

						<Boton className="btn" onClick={() => cambiarEstadoModal2(!estadoModal2)}>
							<Icono>
								<FontAwesomeIcon icon={faFolderPlus} className="i" />
							</Icono>
							Crear Carpeta
						</Boton>

						<Boton className="btn" onClick={() => cambiarEstadoModal3(!estadoModal3)}>
							<Icono>
								<FontAwesomeIcon icon={faTrash} className="i" />
							</Icono>
							Eliminar
						</Boton>

						<Boton className="btn" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
							<Icono>
								<FontAwesomeIcon icon={faCloudDownloadAlt} className="i" />
							</Icono>
							Descargar
						</Boton>

						<Boton className="btn" onClick={() => cambiarEstadoModal5(!estadoModal5)}>
							<Icono>
								<FontAwesomeIcon icon={faShareAlt} className="i" />
							</Icono>
							Compartir
						</Boton>

					</div>
			</Contenedor>
			<>
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
		</>
  );
}

export default Submenu;

const Contenedor = styled.div`
	border-radius: 5px;
	background: #fff;
	margin: 20px;
`;

const Icono = styled.div`
	background: var(--fondoPrimario);
	border-radius: 50px;
	display: inline-block;
	margin-left: -10px;
	margin-right: 5px;
	padding: 10px;
	.i{
		color: #fff;
		font-size: 20px;
	}
`;

const Boton = styled.button`
	background: var(--fondoSegundario);
	box-shadow: 0px 0px 6px rgba(0, 0, 0, .16);
	border: none;
	display: inline-block;
	margin-left: 5px;
	margin-right: 5px;
	width: auto;
`;