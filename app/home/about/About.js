import { Source_Sans_Pro } from "next/font/google";
import Skills from "./Skils";
import MyDesc from "./MyDesc";

const source = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <section id="sobre" className="container  h-screen pt-28">
        <h1
          className={`text-white ${source.className} uppercase text-[41px] font-bold text-center mb-[23px]`}
        >
          Sobre
        </h1>
        <p className="text-white text-center text-[20px] pl-[15.36%] pr-[15.36%]">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e
          tecnologia
        </p>
        <div className="flex gap-32 mt-24 items-start">
          <MyDesc />
          <Skills />
        </div>
      </section>
    </>
  );
}
