import About from "./home/about/About";
import { Contact } from "./home/contact/Contact";
import Home from "./home/Home";

import Stacks from "./home/stacks/Stacks";
import Avatar from "./home/avatar/Avatar";

export default function PageIndex() {
  return (
    <>
      <div className="container mx-auto ">
        <Home />
        <Avatar />
        <About />
        <Stacks />
      </div>
    </>
  );
}
