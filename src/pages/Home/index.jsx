import React from "react";
import HowWeWork from "./sections/HowWeWork";
import Landing from "./sections/Landing";
import ViewProjects from "./sections/ViewProjects";
import "./style.scss";

const Home = () => {
  return (
    <>
      <Landing />
      <HowWeWork />
      <ViewProjects />
    </>
  );
};

export default Home;
