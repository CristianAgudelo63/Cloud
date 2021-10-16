import React from 'react'
import styled from 'styled-components';

const Usuario = () => {
  return(
    <Contenedor>
			<Nombre>Cristian Agudelo</Nombre>
		</Contenedor>
  );
}

export default Usuario;

const Contenedor = styled.div`
  padding: 20px 0px;
  width: 200px;
  height: 10%;
`;

const Nombre = styled.h2`
  font-family: var(--fuenteTexto);
  color: #fff;
  text-align: center;
`;