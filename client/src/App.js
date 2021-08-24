import { React } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Ingresar from './componentes/ingresar';
import CrearCuenta from './componentes/crearCuenta';
import Principal from './componentes/principal';

const App = () => {
	return (
		<BrowserRouter>
			<Route path="/" component={Ingresar} exact={true} />
			<Route path="/crear" component={CrearCuenta} />
			<Route path="/principal" component={Principal} />
		</BrowserRouter>
	);
};

export default App;
