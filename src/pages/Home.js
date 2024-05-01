import React ,{Component}from 'react';
import '../App.css';
import Search from '../components/Search';
import Result from '../components/Result';

class Home extends Component{
    state= {
    termino:'',
    imagenes:[],
    pagina:''
  }
  scroll=()=>{
    const elemento=document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior=()=>{
       //leer el state de la pagina actual
       let pagina=this.state.pagina;
       //leer si la pagina es 1 , para ya no ir atras 
       if(pagina===1)return null;
       
       //resta uno a la pagina actual
       pagina -=1; 
       //agregar el cambio al state
       this.setState({
        pagina
      },()=>{
        this.consultarApi();
        this.scroll();
      }) ; 
       //console.log(pagina);
  }

  paginaSiguiente=()=>{
    //leer el state de la pagina actual
    let pagina=this.state.pagina;
    //sumar uno a la pagina actual
    pagina +=1; 
    //agregar el cambio al state
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    }) ; 
    //console.log(pagina);
  }
  

  consultarApi=()=>{
    const termino= this.state.termino;
    const pagina = this.state.pagina;
    const url =`https://pixabay.com/api/?key=32562478-c35011bd1b513a7c58e3d386d&q=${this.state.termino}&per_page=30&page=${pagina}`;
    console.log(url)
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(resultado=>this.setState({imagenes:resultado.hits}))
  }

  datosBusqueda=(termino)=>{
   this.setState({
    termino:termino,
    pagina:1
   },()=> {
   this.consultarApi();
  })
  }
  
render(){

  return (
    <div className="app container">
      <div className='jumbotron' style={{ padding: '35px' }}>
      <h3 className='display text-center' style={{ color: 'white' }}>Buscador de Imágenes de Pixabay</h3>
      <br/>
  <Search
  datosBusqueda={this.datosBusqueda}
  />
</div>
      <div className='row justify-content-center'/>
      <Result
     imagenes={this.state.imagenes}
     paginaAnterior={this.paginaAnterior}
     paginaSiguiente={this.paginaSiguiente}
     />
    </div>
  );
}
}
export default Home;
