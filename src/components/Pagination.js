import React from "react";

const Paginacion = (props) => {
  return (
    <div className="py-3 d-flex justify-content-center">
    <button onClick={props.paginaAnterior}type="button" className="btn btn-danger mr-1" style={{ padding: '10px 40px', fontSize: '20px', marginRight: '50px' }}>Anterior</button>
    <button onClick={props.paginaSiguiente}type="button" className="btn btn-danger" style={{ padding: '10px 40px', fontSize: '20px', marginLeft: '10px' }}>Siguiente</button>
  </div>
  
  );
};
export default Paginacion;
