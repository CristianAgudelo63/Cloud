import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFileAlt,
  faFileImage,
  faFileVideo
} from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <ContenedorMenu>
      <Seleccionado>
        <ContenedorIcono>
          <FontAwesomeIcon icon={faHome} className='icono' />
        </ContenedorIcono>
        <Texto>Mi Unidad</Texto>
      </Seleccionado>

      <ItemMenu>
        <ContenedorIcono>
          <FontAwesomeIcon icon={faFileAlt} className='icono' />
        </ContenedorIcono>
        <Texto>Documentos</Texto>
      </ItemMenu>

      <ItemMenu>
        <ContenedorIcono>
          <FontAwesomeIcon icon={faFileImage} className='icono' />
        </ContenedorIcono>
        <Texto>Imágenes</Texto>
      </ItemMenu>

      <ItemMenu>
        <ContenedorIcono>
          <FontAwesomeIcon icon={faFileVideo} className='icono' />
        </ContenedorIcono>
        <Texto>Videos</Texto>
      </ItemMenu>
    </ContenedorMenu>
  );
};

export default Menu;

const ContenedorMenu = styled.div`
  height: 50%;
`;

const ItemMenu = styled.div`
  width: 175px;
  height: 50px;
  border-radius: 5px 25px 25px 5px;
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Seleccionado = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 5px 15px 50px 5px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin: 20px 0px;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .icono {
    width: 20px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const ContenedorIcono = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .icono {
    width: 20px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Texto = styled.h3`
  font-family: var(--fuenteBoton);
`;
