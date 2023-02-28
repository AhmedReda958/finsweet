import Features from "sections/features";
import HowWeWork from "sections/HowWeWork";
import Landing from "sections/Landing";
import Testimonials from "sections/testimonials";
import ViewProjects from "sections/ViewProjects";

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
