import BtnLink from "@/components/buttons/BtnLink";
import Card from "@/components/CardLink/Card";

export default function Projects() {
  return (
    <>
      <section id="projetos" className=" h-auto md:h-screen container  pt-28">
        <h1
          className={`text-white  uppercase text-[41px] font-bold text-center mb-[40px]`}
        >
          PROJETOS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11 px-2">
          <Card
            title="Clínica Cmape"
            urlImg="/images/cmape.gif"
            alt="gif para site cmape"
            urlLink="/projetos/cmape"
          ></Card>
          <Card
            title="Site dBmcode"
            urlImg="/images/dbmcode.gif"
            alt="gif para site dbmcode"
            urlLink="/projetos/dbmcode"
          ></Card>
          <Card
            title="Gerador de senhas "
            urlImg="/images/createpasswd.gif"
            alt="gif para apresentar o gerador de senha"
            urlLink="/projetos/createpasswd"
          ></Card>
        </div>
        <div className="my-12 text-center">
          <BtnLink href="/projetos">Ver mais projetos</BtnLink>
        </div>
      </section>
    </>
  );
}
