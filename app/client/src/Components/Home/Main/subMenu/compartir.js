import React from 'react';
import styled from 'styled-components';

const Compartir = () => {
  return (
    <>
      <Info>
        <p>
          Para enviar un archivo a un usuario o varios usuarios que tenga cuenta
          en la plataforma, escribe @ y el nombre del usuario.
        </p>
        <i>Ej: @CristianAgudelo, @JuanMolina, @EmilyParra, @JaryDavid</i>
      </Info>
      <Input type='text' placeholder='Enviar a usuario...' id='' required />
      <Textarea placeholder='Mensaje...' id='' cols='30' rows='10'></Textarea>
      <button className='btn btnPrimario'>Enviar</button>
    </>
  );
};

export default Compartir;

const Info = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #202124;
  text-align: center;
  font-family: 'Roboto';
`;

const Input = styled.input`
  font-family: 'Lato';
  font-size: 16px;
  height: 40px;
  border: 2px solid #cecece;
  border-radius: 3px;
  padding-left: 10px;
  margin-bottom: 5px;
  width: 100%;
`;

const Textarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  max-height: 100px;
  min-height: 100px;
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  border: 2px solid #cecece;
  border-radius: 3px;
  margin-bottom: 15px;
  margin-top: 10px;
`;
