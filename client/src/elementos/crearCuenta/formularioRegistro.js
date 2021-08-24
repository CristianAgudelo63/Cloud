import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormularioDeRegistro = () => {
	return (
		<Formik
			initialValues={{
				usuario: '',
				contraseña: '',
				repetirContraseña: '',
			}}
			validate={(valores) => {
				let err = {};

				if (!valores.usuario) {
					err.usuario = 'Rellena este campo';
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.usuario)) {
					err.usuario = 'El nombre de usuario solo puede contener letras y espacios';
				}

				return err;
			}}
			onSubmit={(valores, { resetForm }) => {
				resetForm();
				console.log('Formulario Enviado');
			}}
		>
			{({ errors }) => (
				<div className="contenedorFormulario">
					<Form>
						{console.log(errors)}
						<div className="contenedorInputs">
							<label htmlFor="usuario" className="label">
								Usuario
							</label>
							<Field
								type="text"
								placeholder="Usuario"
								id="usuario"
								name="usuario"
								className="input"
								required=""
							/>
							<ErrorMessage
								name="usuario"
								component={() => <div className="error">{errors.usuario}</div>}
							/>
							<label htmlFor="contraseña" className="label">
								Contraseña
							</label>
							<Field
								type="password"
								placeholder="Contraseña"
								id="contraseña"
								className="input"
								name="contraseña"
								required=""
							/>
							<label htmlFor="repetirContraseña" className="label">
								Repetir Contraseña
							</label>
							<Field
								type="password"
								placeholder="Repetir Contraseña"
								id="repetirContraseña"
								className="input"
								name="repetirContraseña"
								required=""
							/>
						</div>
						<button type="submit" className="btn btnPrimario">
							Crear Cuenta
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default FormularioDeRegistro;
