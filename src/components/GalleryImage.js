import React from "react";

const GalleryImage = ({ image, icon, title }) => {
  return (
    <article class="gallery-image-container">
      <img src={image} class="gallery-img" alt={title} />
      <div class="gallery-icon">{icon}</div>
    </article>
  );
};

export default GalleryImage;
