import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const Formulario = () => {
	return (
		<Formik
			initialValues={{
				usuario: '',
				contraseña: '',
			}}
			onSubmit={(valores) => {
				console.log('Ingreso con exito');
			}}
		>
			{({ errors }) => (
				<Form>
					{console.log(errors)}
					<Contenedor>
						<label htmlFor="usuario" className="label">
							Usuario
						</label>
						<Field
							type="text"
							placeholder="Usuario"
							id="user"
							name="usuario"
							className="input"
							required=""
						/>
						<label htmlFor="usuario" className="label">
							Contraseña
						</label>
						<Field
							type="password"
							placeholder="Contraseña"
							id="pass"
							className="input"
							name="contraseña"
							required=""
						/>
					</Contenedor>

					<button type="submit" className="btn btnPrimario">
						Ingresar
					</button>
					<button type="submit" className="btn btnSegundario">
						Crear Cuenta
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default Formulario;

const Contenedor = styled.div`
	.input{
		border-radius: 5px;
    margin-bottom: 5px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    text-indent: 20px ;
	}
`;