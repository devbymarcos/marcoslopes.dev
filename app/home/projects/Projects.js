"use client";

import Card from "./Card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section id="projetos" className="h-screen container  pt-28">
        <h1
          className={`text-white  uppercase text-[41px] font-bold text-center mb-[23px]`}
        >
          PROJETOS
        </h1>
        <Card onMouseUp={(e) => console.log("onMouseUp")}>
          <div className="w-[190px] h-[112px] overflow-hidden relative rounded-sm">
            <Image
              className="object-cover"
              src="/images/cmape.png"
              alt="imagem do projeto"
              fill
            />
          </div>
          <div>
            <Link
              href="/cmape"
              className="text-white text-[20px] mb-3 flex gap-3 items-center "
            >
              <h2 className={` text-white `}>Clinica CMAPE</h2>
              <ArrowUpRight size={16} />
            </Link>
            <p className={` text-white `}>
              CAMPE é um centro médico focado em o tratamento da obesidade,
              emagrecimento saudável, hipertrofia muscular, prevenção de doenças
              crônicas e prevalentes (como diabetes , hipertensão arterial ,
              dislipidemia e outras ), longevidade e envelhecimento saudável e
              nutrologia esportiva, com o objetivo de promover saúde, qualidade
              de vida, energia e performance aos nossos pacientes.
            </p>
          </div>
        </Card>
      </section>
    </>
  );
}
