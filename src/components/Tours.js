import React from "react";
import Title from "./Title";
import Tour from "./Tour";
import { tours } from "../constants/data";

const Tours = () => {
  return (
    <section class="section" id="featured">
      <Title title={`Featured <span>tours</span>`} />

      <div class="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>

      <div class="tour-btn">
        <a href="#" class="btn">
          all tours
        </a>
      </div>
    </section>
  );
};

export default Tours;
