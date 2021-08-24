import React from 'react';
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
					<div className="contenedorInputs">
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
					</div>

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
