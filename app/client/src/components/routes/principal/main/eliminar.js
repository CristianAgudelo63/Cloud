import React from 'react'
import styled from 'styled-components'

const Eliminar = () => {
  return(
    <Contenedor>
      <h3>¿Está seguro que desea eliminar el archivo?</h3>
    </Contenedor>
  );  
}

export default Eliminar;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: max-content;
`;
