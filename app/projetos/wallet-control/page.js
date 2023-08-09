import BtnLink from "@/components/buttons/BtnLink";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Wallet Control | Projeto para Estudo",
  description: "Projeto desenvolvido para  estudar a tecnologia",
};
export default function WalletControl() {
  return (
    <>
      <section className="container pt-24">
        <h1 className="text-white mt-12 text-4xl">Wallet Control</h1>
        <p className="text-white mb-32">Projeto para treinamento de Reactjs</p>
        <div className="w-full md:w-[900px] mb-12 relative h-[300px] md:h-[500px] ">
          <Image src="/images/wallet-control.gif" fill alt="" />
        </div>

        <div className="text-white mb-12">
          <h2 className="text-4xl mb-4">Tecnologias utilizadas</h2>
          <ul className="flex  gap-2 ">
            <li className="bg-color-secondary inline-block p-4 rounded">
              HTML
            </li>
            <li className="bg-color-secondary inline-block p-4 rounded">
              Reactjs
            </li>
            <li className="bg-color-secondary inline-block p-4 rounded">
              Nextjs
            </li>
            <li className="bg-color-secondary inline-block p-4 rounded">
              TailwindCSS
            </li>
            <li className="bg-color-secondary inline-block p-4 rounded">
              Lucide-react {"(icones)"}
            </li>
          </ul>
        </div>
        <article className="text-white">
          <h2 className="text-4xl text-white mb-4">Descrição</h2>
          <p className="text-2xl">
            Wallet Control é um sistema de controle financeiro pessoal. Você
            cria uma carteira e gerencia tudo o resto com base nessa carteira.
            Para alimentar esse projeto, crie uma API em Node.js para fazer o
            tratamento dos dados.
          </p>
          <BtnLink href="https://wallet-nextjs-omega.vercel.app/login">
            Acessar
          </BtnLink>
        </article>
      </section>
    </>
  );
}
