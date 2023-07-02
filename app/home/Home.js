import { Source_Sans_Pro } from "next/font/google";
import Mouse from "../../components/mouse/Mouse";

const source = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <section
        id=""
        className=" container  flex justify-center flex-col items-center h-screen"
      >
        <h1
          className={`text-white text-4xl md:text-[62px] font-black uppercase text-center ${source.className}`}
        >
          Olá, me chamo Marcos
        </h1>
        <p
          className={`${source.className} text-white text-md md:text-[28px] md:w-[765px] text-center`}
        >
          Um desenvolvedor Web focado em{" "}
          <span className="text-rose-500 font-bold ">Front- end</span>,
          construindo o Frontend de sites e aplicativos da Web pensando no
          sucesso do produto geral
        </p>
        <Mouse />
      </section>
    </>
  );
}
