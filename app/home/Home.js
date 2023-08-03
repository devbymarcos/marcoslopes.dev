import { Source_Sans_Pro, Fira_Mono } from "next/font/google";
import Link from "next/link";

const source = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const fira_mono = Fira_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <section className=" container px-2   h-screen flex flex-col items-start justify-center">
        <p className={`text-white  text-xl ${fira_mono.className}`}>
          Olá, pode me chamar
        </p>
        <h1
          className={`text-white text-5xl md:text-[62px] font-black uppercase  ${source.className}`}
        >
          Marcos lopes
        </h1>
        <p
          className={`${source.className} text-white text-lg md:text-[28px] md:w-[765px]  my-3 leading-10`}
        >
          Um desenvolvedor JavaScript atualmente focado em{" "}
          <span className="text-lime-600 font-bold  ">Front-end</span>,
          construindo o Frontend de sites e aplicativos da Web
        </p>
        <Link
          className="px-5 py-4 text-lg border-2 transition-all border-[#7843E9] rounded-md font-bold text-white hover:bg-[#7843E9]"
          href="#contato"
        >
          Mande uma mensagem
        </Link>
      </section>
    </>
  );
}
