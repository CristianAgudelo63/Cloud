import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Opcion = ({children, e, cE, titulo}) => {
  return(
    <>
      {e &&
        <Fondo>
          <ContenedorModal>

            <EncabezadoModal>
              <Titulo>{titulo}</Titulo>
              <BotonCerrar onClick={() => cE(false)}>
                <FontAwesomeIcon icon={faTimes} className="icono"/>
              </BotonCerrar>
            </EncabezadoModal>
            
            <Contenido>
              {children}
            </Contenido>

          </ContenedorModal>
        </Fondo>
      }
    </>
  );
}

export default Opcion;

const Fondo = styled.div`
  position: fixed;
  right: 0;
  margin-right: 20px;
`;

const ContenedorModal = styled.div`
  width: 300px;
  min-height: 100px;
  background: rgba(255, 255, 255, 1);
  position: relative;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const Titulo = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #1766dc;
  font-family: 'Roboto';
`;

const BotonCerrar = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 25px;
  height: 25px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #1766DC;

  &:hover{
    background: #f2f2f2;
  }

  .icono{
    width: 100%;
    height: 100%;
    padding: 5px
  }
`;

const Contenido = styled.div`
  background: #fff;
`;