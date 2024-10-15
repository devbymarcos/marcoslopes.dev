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
          Desde 2017, venho me dedicando ao desenvolvimento de software para a
          web. Comecei com tecnologias básicas como HTML, CSS e JavaScript,
          utilizando jQuery. Com o tempo, evoluí minhas habilidades e hoje
          trabalho com linguagens e frameworks modernos como C#, TypeScript,
          React Native e React com Next.js. Além de desenvolver, gosto de criar
          conteúdo focado no ensino de programação e mantenho o canal
          DevByMarcos no YouTube. Atualmente, também me dedico ao ensino
          particular de programação, ajudando alunos a se aprofundarem nessa
          área.
        </Paragraph>
      </motion.article>
    </>
  );
}
