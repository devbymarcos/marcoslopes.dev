"use client";

import Card from "./Card";

export default function Projects() {
  return (
    <>
      <section id="projetos" className="h-screen container  pt-28">
        <h1
          className={`text-white  uppercase text-[41px] font-bold text-center mb-[23px]`}
        >
          PROJETOS
        </h1>
        <Card title="Clínica Cmape" urlImg="/images/cmape.png">
          CAMPE é um centro médico focado em o tratamento da obesidade,
          emagrecimento saudável, hipertrofia muscular, prevenção de doenças
          crônicas e prevalentes (como diabetes , hipertensão arterial ,
          dislipidemia e outras ), longevidade e envelhecimento saudável e
          nutrologia esportiva, com o objetivo de promover saúde, qualidade de
          vida, energia e performance aos nossos pacientes.
        </Card>
      </section>
    </>
  );
}
