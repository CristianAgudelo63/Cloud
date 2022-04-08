import React from 'react';
import styled from 'styled-components';

const Estado = () => {
  return (
    <Progreso className='estado'>
      <ProgresoTexto>
        <h3>Ocupado: </h3>
        <span>600MB</span>
        <h3>Disponible: </h3>
        <span>1424MB</span>
      </ProgresoTexto>

      <ProgresoGrafico>
        <progress
          className='barra'
          id='proceso'
          value='29'
          max='100'
        ></progress>
      </ProgresoGrafico>
    </Progreso>
  );
};

export default Estado;

const Progreso = styled.div`
  height: 40%;
`;

const ProgresoTexto = styled.div`
  font-family: var(--fuenteTexto);
  font-size: 16px;
  color: #f2f2f2;
`;

const ProgresoGrafico = styled.div`
  height: 20px;
  .barra {
    height: 15px;
  }
`;
