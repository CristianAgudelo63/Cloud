import React from 'react';
import styled from 'styled-components';
import Usuario from './aside/usuario';
import Menu from './aside/menu';
import Estado from './aside/estado';

const Aside = () => {
	return (
		<BarraLateral className="aside">
			<Usuario />
			<Menu />
			<Estado />
		</BarraLateral>
	);
}; 

export default Aside;

const BarraLateral = styled.div`
	height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`; 