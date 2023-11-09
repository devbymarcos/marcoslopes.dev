import About from "./home/about/About";
import { Contact } from "./home/contact/Contact";
import Home from "./home/Home";
import Stacks from "./home/stacks/Stacks";

export default function PageIndex() {
  return (
    <>
      <Home />
      <About />
      <Contact />
    </>
  );
}
