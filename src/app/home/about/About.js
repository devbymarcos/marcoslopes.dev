import Stacks from "../stacks/Stacks";
import MyDesc from "./MyDesc";

export default function About() {
  return (
    <>
      <section id="sobre" className=" lg:h-screen-custom ">
        <h1 className="mb-12 text-white uppercase text-2xl font-bold">Sobre</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MyDesc />
          <Stacks />
        </div>
      </section>
    </>
  );
}
