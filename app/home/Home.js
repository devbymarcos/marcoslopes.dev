import { Source_Sans_Pro } from "next/font/google";
import Mouse from "./Mouse";

const source = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <section className="flex justify-center flex-col items-center h-screen">
        <h1
          className={`text-white text-[62px] font-black uppercase text-center ${source.className}`}
        >
          Olá, me chamo Marcos
        </h1>
        <p
          className={`${source.className} text-white text-[28px] w-[765px] text-center`}
        >
          Um desenvolvedor Web focado em{" "}
          <span className="text-rose-500 font-bold">Front- end</span>,
          construindo o Frontend de sites e aplicativos da Web pensando no
          sucesso do produto geral
        </p>
        <Mouse />
      </section>
    </>
  );
}
