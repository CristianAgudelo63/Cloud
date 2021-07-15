import './sass/app.sass';
import logo from './img/png/logo.png';

const App = () => {
	return (
		<div className="body">
			<div className="header">
				<img src={logo} alt="logo" className="logo"></img>
			</div>

			<div className="main">
				<div className="contenedorTitulo">
					<div>
						<h1 className="titulo">Ingresa a tu cuenta Cloud</h1>
					</div>
				</div>
				<div className="contenedorInputs">
					<input type="text" placeholder="Usuario" id="user" required="" className="input"></input>
					<input
						type="password"
						placeholder="Contraseña"
						id="pass"
						required=""
						className="input"
					></input>
				</div>
				<div className="contenedorBotones">
					<input type="submit" value="Ingresar" className="btn btnPrimario"></input>
					<a href="#" className="btn btnSegundario">
						Crear Cuenta
					</a>
				</div>
			</div>
		</div>
	);
};

export default App;
