import React from "react";

import Button from "components/Button";
import img from "assets/images/home.svg";
import ArrowLink from "components/ArrowLink";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="text">
          <h1 className="fw-bold">
            Building stellar websites for early startups
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="actions">
            <Button color="secondary" rounded>
              View our work
            </Button>

            <ArrowLink href="/">View Pricing</ArrowLink>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
