import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from './../../Assets/Img/logo.png';
import Opcion from './Header/modal.js';
import Opciones from './Header/opciones.js';

const Header = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);

  return (
    <>
      <Cabezera className='header'>
        <CabezeraLogo>
          <Logo src={logo} alt='logo'></Logo>
        </CabezeraLogo>

        <Busqueda>
          <ContenedorIcono>
            <IconoBusqueda>
              <FontAwesomeIcon icon={faSearch} className='iconoBusqueda' />
            </IconoBusqueda>
          </ContenedorIcono>
          <Input
            className='input'
            type='text'
            placeholder='Buscar archivo o carpeta'
          ></Input>
        </Busqueda>

        <Perfil>
          <IconoPerfil onClick={() => cambiarEstadoModal(!estadoModal)}>
            <FontAwesomeIcon icon={faUserCircle} className='i-usuario' />
          </IconoPerfil>
        </Perfil>
      </Cabezera>

      <Opcion e={estadoModal} cE={cambiarEstadoModal} titulo='Opciones'>
        <Opciones />
      </Opcion>
    </>
  );
};

export default Header;

const Cabezera = styled.div`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 18% 72% 10%;
  grid-template-rows: auto;
  grid-template-areas: 'headerLogo headerPrincipal perfil';
  justify-items: center;
  align-content: center;
`;

const CabezeraLogo = styled.div`
  max-width: 250px;
  height: 100%;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 125px;
`;

const ContenedorIcono = styled.div`
  width: 60px;
  height: 40px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
`;

const Input = styled.input`
  width: 400px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border: none;
  outline: none;
  text-indent: 60px;
  &:hover {
    background: #fff;
  }
  &:focus {
    background: #fff;
  }
`;

const Perfil = styled.div`
  width: 50px;
  cursor: pointer;
`;

const IconoPerfil = styled.i`
  font-size: 50px;
  color: #fff;
`;

const IconoBusqueda = styled.i`
  color: rgba(0, 0, 0, 0.8);
  font-size: 25px;
  margin-left: 20px;
`;

const Busqueda = styled.i`
  background: #transparent;
`;
