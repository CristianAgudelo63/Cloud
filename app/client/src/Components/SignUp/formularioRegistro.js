import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import db from './../../Firebase/firebaseConfig';

const FormularioDeRegistro = () => {
  return (
    <Formik
      initialValues={{
        usuario: '',
        contraseña: '',
        repetirContraseña: ''
      }}
      validate={valores => {
        const err = {};

        if (!valores.usuario) {
          err.usuario = 'Rellena este campo';
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.usuario)) {
          err.usuario =
            'El nombre de usuario solo puede contener letras y espacios';
        }

        return err;
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        console.log('Formulario Enviado');

        db.collection('usuarios').add({
          usuario: 'Test',
          contraseña: 'test',
          repetirContraseña: 'test'
        });
      }}
    >
      {({ errors }) => (
        <Contenedor>
          <Form method='POST'>
            {console.log(errors)}
            <Contenedor>
              <label htmlFor='usuario' className='label'>
                Usuario
              </label>
              <Field
                type='text'
                placeholder='Usuario'
                id='usuario'
                name='usuario'
                className='input'
                required=''
              />
              <ErrorMessage
                name='usuario'
                component={() => <ErrorTipado>{errors.usuario}</ErrorTipado>}
              />
              <label htmlFor='contraseña' className='label'>
                Contraseña
              </label>
              <Field
                type='password'
                placeholder='Contraseña'
                id='contraseña'
                className='input'
                name='contraseña'
                required=''
              />
              <label htmlFor='repetirContraseña' className='label'>
                Repetir Contraseña
              </label>
              <Field
                type='password'
                placeholder='Repetir Contraseña'
                id='repetirContraseña'
                className='input'
                name='repetirContraseña'
                required=''
              />
            </Contenedor>
          </Form>
        </Contenedor>
      )}
    </Formik>
  );
};

export default FormularioDeRegistro;

const ErrorTipado = styled.div`
  color: #e92b2d;
  font-weight: 600;
  font-size: 12px;
  margin: 0 auto;
  width: 60%;
  font-family: var(--fuenteTexto);
`;

const Contenedor = styled.div`
  .input {
    margin: 0 auto;
    max-width: 60%;
    display: block;
    width: 60%;
    text-indent: 20px;
  }
`;
