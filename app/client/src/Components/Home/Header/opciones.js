import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opciones = () => {
  return (
    <>
      <Tema>
        <h2>Temas</h2>
        <BtnPersA className='btn personalizadoA'>Atardecer</BtnPersA>
        <BtnPersB className='btn btnPrimario personalizadoB'>Flores</BtnPersB>
        <BtnPersC className='btn btnPrimario personalizadoC'>Oceano</BtnPersC>
        <BtnPersD className='btn btnPrimario personalizadoD'>Noche</BtnPersD>
      </Tema>
      <Boton>
        <Link to='/'>Cerrar Sesión</Link>
      </Boton>
    </>
  );
};

export default Opciones;

const Tema = styled.div`
  border: 1px solid #cecece;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  h2 {
    text-align: center;
  }
`;

const Boton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--fondoBoton);
  color: var(--colorTextoBoton);
  border: none;
  margin: 0 auto;
  width: 80%;
  border-radius: 5px;
  padding: 10px;
  color: var(--colorTextoBoton);
  cursor: pointer;
`;

const BtnPersA = styled.button`
  background: var(--fondoPrimarioPersonalizadoA);
  color: var(--colorTextoBoton);
  border: none;
  margin: 10px auto;
  width: 70%;
  border-radius: 10px;
  &:hover {
    width: 80%;
  }
`;

const BtnPersB = styled.button`
  background: var(--fondoPrimarioPersonalizadoB);
  color: var(--colorTextoBoton);
  border: none;
  margin: 10px auto;
  width: 70%;
  border-radius: 10px;
  &:hover {
    width: 80%;
  }
`;

const BtnPersC = styled.button`
  background: var(--fondoPrimarioPersonalizadoC);
  color: var(--colorTextoBoton);
  border: none;
  margin: 10px auto;
  width: 70%;
  border-radius: 10px;
  &:hover {
    width: 80%;
  }
`;

const BtnPersD = styled.button`
  background: var(--fondoPrimarioPersonalizadoD);
  color: var(--colorTextoBoton);
  border: none;
  margin: 10px auto;
  width: 70%;
  border-radius: 10px;
  &:hover {
    width: 80%;
  }
`;
