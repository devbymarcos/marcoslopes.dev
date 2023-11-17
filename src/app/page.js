import About from "./home/about/About";
import { Contact } from "./home/contact/Contact";
import Home from "./home/Home";
import Project from "./home/project/Projects";

export default function PageIndex() {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}
