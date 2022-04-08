import React from 'react';
import styled from 'styled-components';

const SubirArchivos = () => {
  return (
    <Contenedor>
      <Arrastrar>
        <h4>Arrastra y Suelta el Archivo</h4>
        <span>o</span>
        <Boton>Seleccionar tus Archivos</Boton>
        <input type='file' name='' id='archivo' hidden multiple />
      </Arrastrar>
      <div id='previsualizacion'></div>
    </Contenedor>
  );
};

export default SubirArchivos;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: max-content;
`;

const Arrastrar = styled.div`
  border: 3px solid #ddd;
  border-radius: 5px;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 460px;
`;

const Boton = styled.button`
  padding: 10px 20px;
  background: var(--fondoBoton);
  border: var(--bordeBoton);
  border-radius: var(--bordeRedondeadoBoton);
  font-family: var(--fuenteBoton);
  cursor: var(--cursor);
  color: #fff;
`;
