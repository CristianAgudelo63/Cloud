import React from 'react';
import styled from 'styled-components';

const Eliminar = () => {
  return (
    <>
      <Info>¿Está seguro que desea eliminar el archivo?</Info>
      <Boton className='btn btnPrimario'>Eliminar</Boton>
    </>
  );
};

export default Eliminar;

const Info = styled.h2`
  text-align: center;
  font-family: 'Roboto';
`;

const Boton = styled.button`
  background: #ce1818;
  font-family: 'Roboto';
`;
