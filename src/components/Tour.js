import React from "react";

const Tour = ({
  image,
  date,
  title,
  duration,
  description,
  country,
  price,
}) => {
  return (
    <article class="tour-card">
      <div class="tour-img-container">
        <img src={image} alt="tour" />
        <p class="tour-date">{date}</p>
      </div>
      <div class="tour-info">
        <div class="tour-title">
          <h4>{title}</h4>
          <p>{duration}</p>
        </div>
        <p>{description}</p>
        <div class="tour-footer">
          <p>
            <span>
              <i class="fas fa-map">{country}</i>
            </span>
          </p>
          <p>€{price}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
