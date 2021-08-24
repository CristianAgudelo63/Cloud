import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faFileImage, faFileVideo } from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
	return (
		<div className="aside">
			<div className="usuario">
				<h2>Cristian Agudelo</h2>
			</div>

			<div className="menu">
				<FontAwesomeIcon icon={faHome} />
				<FontAwesomeIcon icon={faFileAlt} />
				<FontAwesomeIcon icon={faFileImage} />
				<FontAwesomeIcon icon={faFileVideo} />
			</div>

			<div className="estado">
				<div className="progresoTexto">
					<h3>Ocupado: </h3>
					<span>200MB</span>
					<h3>Disponible: </h3>
					<span>1.8GB</span>
				</div>
				<div className="progresoGrafico">
					<progress value="10" max="100"></progress>
				</div>
			</div>

			<div className="legal">
				<Link to="https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=share">FeedBack</Link>
				<Link to="https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=share">Código Fuente</Link>
				<Link to="https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=share">
					Términos legales y de uso
				</Link>
				<Link to="https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=share">
					Aviso de Privacidad
				</Link>
			</div>
		</div>
	);
};

export default Aside;
