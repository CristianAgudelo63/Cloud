import React from 'react'

const Estado = () => {
  return (
    <div className="estado">
				<div className="progresoTexto">
					<h3>Ocupado: </h3>
					<span>600MB</span>
					<h3>Disponible: </h3>
					<span>1424MB</span>
				</div>
				<div className="progresoGrafico">
					<progress className="barra" id="proceso" value="29" max="100"></progress>
				</div>
			</div>
  );
}


export default Estado