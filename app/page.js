import Nav from "@/components/menu/Nav";
import About from "./home/about/About";
import { Contact } from "./home/contact/Contact";
import Home from "./home/Home";
import Projects from "./home/projects/Projects";
import Stacks from "./home/stacks/Stacks";

export const metadata = {
  title: "Marcos Lopes | javascript developer",
  description: "Ola você chegou em meu site pessoal veja meus trabalhos",
};

export default function PageIndex() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="col-one">
            <Home />
          </div>
          <div className="col-two">
            <About />
            <Projects />
            <Stacks />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
