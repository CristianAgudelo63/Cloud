import React from 'react';
import './../sass/principal.sass';
import Header from './routes/principal/header';
import Main from './routes/principal/main';
import Aside from './routes/principal/aside';

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
