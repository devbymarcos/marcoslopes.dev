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
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <MyDesc />
            <Skills />
            <div className="mt-10">
              <div className="text-white font-bold">DevTools</div>
              <ul>
                <li className="text-white italic">
                  SO - POP_OS 22.04 - {`[linux]`}
                </li>
                <li className="text-white italic">VsCode</li>
                <li className="text-white italic">Beekeeper Studio</li>
              </ul>
            </div>
          </div>
          <div className="relative w-[300px] overflow-hidden rounded h-[300px] justify-self-center">
            <Image
              className="hover:scale-105 transition-all filter grayscale hover:filter-none"
              src="/images/marcos-v2.png"
              alt="Marcos Lopes"
              fill
            />
          </div>
        </div>
      </section>
    </>
  );
}
