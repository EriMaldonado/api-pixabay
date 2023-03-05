import React, { Component } from "react";

class Search extends Component {


  busquedaRef=React.createRef();
  obtenerDatos=(e)=>{
    e.preventDefault();
    //Tomamos el valor del input 
    const termino = this.busquedaRef.current.value;
    //lo enviamos al componente principal 
    this.props.datosBusqueda(termino);
  }

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
  <div className="row justify-content-center">
    <div className="form-group col-md-8">
      <input ref={this.busquedaRef}
        type="text"
        className="form-control form-control-lg"
        placeholder="Busca tu imagen. Ejemplo: Futbol" style={{ padding: "15px", fontSize: "22px" }} />
        
    </div>
    <div className="form-group col-md-4">
      <input type="submit" className="btn btn-lg btn-danger btn-block form-control" placeholder="Busca tu imagen.Ejemplo:Futbol"style={{ padding: "15px", fontSize: "22px" }}/>
    </div>
  </div>
</form>

    );
  }
}

export default Search;
