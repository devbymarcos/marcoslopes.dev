import { Source_Sans_Pro } from "next/font/google";
import Skills from "./Skils";
import MyDesc from "./MyDesc";
import Image from "next/image";

const source = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <section id="sobre" className="container  md:h-screen pt-28">
        <h1
          className={`text-white ${source.className} uppercase text-[41px] font-bold  mb-[23px]`}
        >
          Sobre
        </h1>
        <p className="text-white  text-[20px] w-96 mb-10  ">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e
          tecnologia
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <MyDesc />
            <Skills />
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
