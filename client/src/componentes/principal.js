import React from 'react';
import './../sass/principal.sass';
import Header from './../elementos/principal/header';
import Main from './../elementos/principal/main';
import Aside from './../elementos/principal/aside';

const Principal = () => {
	return (
		<body>
			<Header />
			<div className="contenido">
				<Aside />
				<Main />
			</div>
		</body>
	);
};

export default Principal;
