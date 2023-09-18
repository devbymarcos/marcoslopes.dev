import Nav from "@/components/menu/Nav";
import About from "./home/about/About";
import { Contact } from "./home/contact/Contact";
import Home from "./home/Home";

import Stacks from "./home/stacks/Stacks";
import Avatar from "./home/avatar/Avatar";

export default function PageIndex() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="col-one">
            <Home />
          </div>
          <div className="col-two">
            <Avatar />
            <About />
            <Stacks />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
