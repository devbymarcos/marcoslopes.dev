import About from "./home/about/About";
import { Contact } from "./home/contact/Contact";
import Home from "./home/Home";
import Projects from "./home/projects/Projects";

export const metadata = {
  title: "Marcos Lopes | javascript developer",
  description: "Ola você chegou em meu site pessoal veja meus trabalhos",
};

export default function PageIndex() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
