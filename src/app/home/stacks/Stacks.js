import Image from "next/image";

export default function Stacks() {
  return (
    <>
      <section id="tecnologias" className=" h-auto md:h-screen  my-28  pt-28">
        <h1 className="mb-12 text-white uppercase text-2xl font-bold">
          Tecnologias
        </h1>
        <article className="text-white mb-12">
          <h1 className="text-2xl font-bold  mb-3">
            Linguagens de Programação
          </h1>
          <p>Javascript, Python, HTML, CSS</p>
        </article>
        <article className="text-white  mb-12">
          <h1 className="text-2xl font-bold  mb-3">Bibliotecas e Frameworks</h1>
          <p>React, NextJS, Flask, Node, Expressjs, Bootstrap, TailwindCSS</p>
        </article>
        <article className="text-white  mb-12">
          <h1 className="text-2xl font-bold  mb-3">
            Ferramentas e Plataformas
          </h1>
          <p>
            Git,GitHub, Office 365 Management, WordPress, Linux OS, Insomnia,
            Github, MYSQL
          </p>
        </article>
      </section>
    </>
  );
}