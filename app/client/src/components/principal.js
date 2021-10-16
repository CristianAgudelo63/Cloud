import React from 'react';
import styled from 'styled-components';
import Header from './routes/principal/header';
import ContenidoApp from './routes/principal/main';
import Aside from './routes/principal/aside';

const Principal = () => {
	return (
		<body>
			<Header />
			<Main>
				<Aside />
				<ContenidoApp />
			</Main>
		</body>
	);
};

export default Principal;

const Main = styled.div`
	display: grid;
  grid-template-columns: 18% 82%;
  grid-template-rows: auto;
  grid-template-areas: "header header" "aside main";
`;