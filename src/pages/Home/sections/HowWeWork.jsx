import ArrowLink from "components/ArrowLink";
import React from "react";

const HowWeWork = () => {
  return (
    <div className="how-we-work">
      <div className="container">
        <div className=" row">
          <div className="col-12 col-lg-5  pe-5 mb-5 mb-lg-0">
            <h2 className="mb-3">How we work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <ArrowLink className="mt-2 text-primary">
              Get in touch with us
            </ArrowLink>
          </div>
          <div className="col-12 col-lg-7 ">
            <div className="row mb-3">
              <div className="box col-6">
                <div className="box-number">
                  <span>01</span>
                </div>
                <h5>Strategy</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div className="box col-6">
                <div className="box-number">
                  <span>02</span>
                </div>
                <h5>Wireframing</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
            </div>
            <div className="row">
              <div className="box col-6">
                <div className="box-number">
                  <span>03</span>
                </div>
                <h5>Design</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div className="box col-6">
                <div className="box-number">
                  <span>04</span>
                </div>
                <h5>Development</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
