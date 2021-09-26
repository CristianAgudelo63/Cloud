import { React } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Ingresar from './components/ingresar';
import CrearCuenta from './components/crearCuenta';
import Principal from './components/principal';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/" component={Ingresar} exact={true} />
				<Route path="/crear" component={CrearCuenta} />
				<Route path="/principal" component={Principal} />
			</BrowserRouter>
		</div>
	);
};

export default App;