import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faFileImage, faFileVideo } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <div className="menu">
				<div className="seleccionado">
					<div className="contenedorIcono">
						<FontAwesomeIcon className="iconoMenu" icon={faHome} />
					</div>
					<h3 className="textoItemMenu">Mi Unidad</h3>
				</div>

				<div className="itemMenu">
					<div className="contenedorIcono">
						<FontAwesomeIcon className="iconoMenu" icon={faFileAlt} />
					</div>
					<h3 className="textoItemMenu">Documentos</h3>
				</div>

				<div className="itemMenu">
					<div className="contenedorIcono">
						<FontAwesomeIcon className="iconoMenu" icon={faFileImage} />
					</div>
					<h3 className="textoItemMenu">Imágenes</h3>
				</div>

				<div className="itemMenu">
					<div className="contenedorIcono">
						<FontAwesomeIcon className="iconoMenu" icon={faFileVideo} />
					</div>
					<h3 className="textoItemMenu">Videos</h3>
				</div>
			</div>
  );
}


export default Menu;