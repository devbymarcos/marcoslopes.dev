import { ChevronRight } from "lucide-react";

function Paragraph({ children }) {
  return <p className={` mb-4 text-xl text-slate-400`}>{children}</p>;
}

export default function MyDesc() {
  return (
    <>
      <article className="basis-3/4">
        <Paragraph>
          Meu nome é Marcos lopes Juvêncio e sou um entusiasta de programação.
          Desde 2017, venho me dedicando ao mundo da desenvolvimento de
          software, mergulhando na empolgante jornada de transformar linhas de
          código em soluções funcionais.
        </Paragraph>
        <Paragraph>
          Minha jornada começou com PHP, HTML, CSS e JavaScript (com jQuery)
          como minha pilha inicial. Através dessas tecnologias, adquiri um
          sólido entendimento dos fundamentos da programação web e construí uma
          base sólida para minha carreira.
        </Paragraph>
        <Paragraph>
          À medida que o campo da programação evoluiu, decidi migrar minha pilha
          tecnológica para JavaScript, explorando seu vasto ecossistema de
          ferramentas e frameworks. Atualmente, concentro-me em trabalhar com
          ReactJS, Next.js e Tailwind CSS, que me permitem criar interfaces
          modernas e responsivas de forma eficiente.
        </Paragraph>
      </article>
    </>
  );
}
