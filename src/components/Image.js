import React from "react";


const Image = (props)=>{
    const {largeImageURL,likes,previewURL,tags,views}= props.imagen
return(
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div className="card">
    <img
          src={previewURL}
          alt={tags}
          className="card-img-top img-fluid"
          style={{ maxHeight: "130px"}}
        />
        <div className="card-body"/>
        <p className="card-text text-center">{ likes } Me gusta</p>
        <p className="card-text text-center">{ views} Vistas</p>
        <a href={largeImageURL}target="_blank" className="btn btn-primary btn-block">Ver imagen</a>
    </div>
   </div>
)
}

export default Image;