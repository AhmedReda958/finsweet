import React from "react";
import Features from "./sections/features";
import HowWeWork from "./sections/HowWeWork";
import Landing from "./sections/Landing";
import Testimonials from "./sections/testimonials";
import ViewProjects from "./sections/ViewProjects";
import "./sections/style/style.scss";

const Home = () => {
  return (
    <>
      <Landing />
      <HowWeWork />
      <ViewProjects />
      <Features />
      <Testimonials />
    </>
  );
};

export default Home;
