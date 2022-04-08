import React from 'react';
import styled from 'styled-components';

const CrearCarpeta = () => {
  return (
    <>
      <Input
        type='text'
        placeholder='Escribe el nombre de la carpeta'
        id=''
        required
      />
      <Seleccionar>
        <option value='asunto'>-Seleccionar Ubicacción-</option>
        <option value=''>Documentos</option>
        <option value=''>Imágenes</option>
        <option value=''>Videos</option>
      </Seleccionar>
      <button className='btn btnPrimario'>Crear</button>
    </>
  );
};

export default CrearCarpeta;

const Input = styled.input`
  font-family: 'Lato';
  border-radius: 3px;
  font-size: 16px;
  height: 40px;
  border: 2px solid #cecece;
  padding-left: 10px;
  margin-bottom: 5px;
  width: 100%;
`;

const Seleccionar = styled.select`
  font-family: 'Lato';
  font-size: 16px;
  height: 40px;
  border: 2px solid #cecece;
  border-radius: 3px;
  padding-left: 10px;
  margin-bottom: 5px;
  width: 100%;
`;
