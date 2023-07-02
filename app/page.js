import About from "./home/about/About";
import Home from "./home/Home";
import Projects from "./home/projects/Projects";

export default function PageIndex() {
  return (
    <>
      <Home />
      <About />
      <Projects />
    </>
  );
}
