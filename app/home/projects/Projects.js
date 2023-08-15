import BtnLink from "@/components/buttons/BtnLink";
import Card from "@/components/CardLink/Card";
import TagSkill from "@/components/tag-skill/TagSkill";

export default function Projects() {
  return (
    <>
      <section id="projetos" className=" h-auto md:h-screen container  pt-28">
        <div className="px-2">
          <Card
            title="Clínica Cmape"
            urlImg="/images/cmape.gif"
            alt="gif para site cmape"
            urlLink="/projetos/cmape"
          >
            Web site para apresentação da Clínica, blog, painel administrativo
            <TagSkill stacks={["php", "Html", "CSS", "JQuery"]} />
          </Card>
          <Card
            title="Site dBmcode"
            urlImg="/images/dbmcode.gif"
            alt="gif para site dbmcode"
            urlLink="/projetos/dbmcode"
          >
            Web site para distribuição de conteudo sobre desenvolvimento web
            base na quantidade de caracteres escolhido. Possui funcionalidade
            copy e seletor de quantidade.
            <TagSkill stacks={["Reactjs", "TailwindCSS", "Nextjs"]} />
          </Card>
          <Card
            title="Gerador de senhas "
            urlImg="/images/createpasswd.gif"
            alt="gif para apresentar o gerador de senha"
            urlLink="/projetos/createpasswd"
          >
            Projeto para prática de JavaScript. O app gera senha aleatórias com
            base na quantidade de caracteres escolhido. Possui funcionalidade
            copy e seletor de quantidade.
            <TagSkill stacks={["Javascript", "html", "css"]} />
          </Card>
        </div>
        <div className="my-12 text-center">
          <BtnLink href="/projetos">Ver mais projetos</BtnLink>
        </div>
      </section>
    </>
  );
}
