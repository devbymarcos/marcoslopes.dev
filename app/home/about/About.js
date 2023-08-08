import Skills from "./Skils";
import MyDesc from "./MyDesc";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="sobre" className="container px-3  md:h-screen pt-28">
        <h1
          className={`text-white  uppercase text-[41px] font-bold  mb-[23px]`}
        >
          Sobre
        </h1>
        <p className={` text-white  text-[20px] w-96 mb-10`}>
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e
          tecnologia
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <MyDesc />
          <Skills />
        </div>
      </section>
    </>
  );
}
