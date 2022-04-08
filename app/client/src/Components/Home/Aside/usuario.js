import React from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Usuario = () => {
  // const { id } = useParams();
  // const users = [CristianAgudelo, ewrtwer];
  // const user = users == id;
  return (
    <Contenedor>
      {/* <Nombre>{id}</Nombre> */}
      <Nombre>Cristian Agudelo</Nombre>
    </Contenedor>
  );
};

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
