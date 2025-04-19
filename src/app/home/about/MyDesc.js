"use client";
import { motion } from "framer-motion";

function Paragraph({ children }) {
  return (
    <p className={` mb-4 text-base text-font-color dark:text-font-color-dark`}>
      {children}
    </p>
  );
}

export default function MyDesc() {
  return (
    <>
      <motion.article
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween" }}
      >
        <Paragraph>
          Apaixonado por tecnologia, iniciei minha transição de carreira para a
          área de TI em 2023, após experiências anteriores como analista
          financeiro e empreendedor no setor de alimentação. Desde então, venho
          me dedicando intensamente ao estudo e à prática do desenvolvimento de
          software. Comecei aprendendo PHP, JavaScript, HTML e CSS, e hoje
          minhas stacks favoritas incluem Next.js com React para o front-end e
          Node.js e Java no back-end. Utilizo MySQL como banco de dados
          principal, o que tem atendido bem às minhas necessidades em projetos
          pessoais. Atualmente, atuo como desenvolvedor nas horas vagas e
          trabalho como analista de aplicativo, prestando suporte a usuários,
          realizando treinamentos e aplicando programação para automatizar e
          otimizar rotinas internas. Meu principal objetivo é migrar totalmente
          para o desenvolvimento de software e atuar profissionalmente como
          desenvolvedor full-stack, contribuindo com soluções modernas e
          escaláveis.
        </Paragraph>
      </motion.article>
    </>
  );
}
