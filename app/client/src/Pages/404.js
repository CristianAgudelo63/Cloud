import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'animate.css';

const NotFound = () => {
  return (
    <>
      <Contenedor className='animate__animated animate__flipInY'>
        <FontAwesomeIcon icon={faFaceFrown} className='icono' />
        <h1>Error 404</h1>
        <Link to='/Cloud-Client/' className='btn btnPrimario'>
          Volver
        </Link>
      </Contenedor>
    </>
  );
};

export default NotFound;

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  background: var(--fondoSegundario);
  max-width: 80%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px #20212457;
  height: 60vh;
  h1 {
    font-size: 4rem;
  .icono{
    width: 40px;
    height: 40px;
  }
`;
