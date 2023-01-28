import React from "react";

import TestimonialsSlider from "components/TestimonialsSlider";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h3>What our clients say about us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
          <div className="col-12 col-md-8">
            <TestimonialsSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
