import React from "react";
import ArrowLink from "components/ArrowLink";
import "./projects.scss";
import image1 from "assets/images/project-1.png";
const ViewProjects = () => {
  return (
    <div className="view-projects">
      <div className="container">
        <div className="header mb-5">
          <h2>View our projects</h2>
          <ArrowLink href="/protfolio">View More</ArrowLink>
        </div>
        <div className="projects row gap-3 gap-md-0">
          <div className="col-md-8 col-12">
            <div className="project main-project">
              <img src={image1} alt="project" />
              <div className="text">
                <h6>Workhub office Webflow Webflow Design</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>
                <ArrowLink href="/porjects">View project</ArrowLink>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="project mb-3">
              <img src={image1} alt="project" />
              <div className="text">
                <h6>Workhub office Webflow Webflow Design</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>
                <ArrowLink href="/porjects">View project</ArrowLink>
              </div>
            </div>
            <div className="project">
              <img src={image1} alt="project" />
              <div className="text">
                <h6>Workhub office Webflow Webflow Design</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>
                <ArrowLink href="/porjects">View project</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProjects;
