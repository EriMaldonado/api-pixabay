import React, { useState } from "react";

const Image = (props) => {
  const { largeImageURL, likes, previewURL, tags, views } = props.imagen;
  const [showPreview, setShowPreview] = useState(false);

  const handleSaveImage = () => {
    const link = document.createElement("a");
    link.href = largeImageURL;
    link.download = "imagen.jpg";
    link.click();
  };

  const handleTogglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img
          src={previewURL}
          alt={tags}
          className="card-img-top img-fluid"
          style={{ maxHeight: "130px", cursor: "pointer" }}
          onClick={handleTogglePreview}
        />
        <div className="card-body" />
        <p className="card-text text-center">{likes} Me gusta</p>
        <p className="card-text text-center">{views} Vistas</p>
        <div className="text-center">
          <a
            href={largeImageURL}
            target="_blank"
            className="btn btn-primary btn-block"
          >
            Ver imagen
          </a>
        </div>
        {showPreview && (
          <div className="overlay" onClick={handleTogglePreview}>
            <div className="preview-container">
              <img
                src={largeImageURL}
                alt={tags}
                className="preview-img"
                style={{ maxWidth: "480px", maxHeight: "480px" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
