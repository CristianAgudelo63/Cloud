import React from 'react';
import Usuario from './aside/usuario';
import Menu from './aside/menu';
import Estado from './aside/estado';

const Aside = () => {
	return (
		<div className="aside">
			<Usuario />
			<Menu />
			<Estado />
		</div>
	);
}; 

export default Aside;