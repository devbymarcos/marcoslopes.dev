"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const skills = [
  { name: "HTML", urlImage: "/images/icons-stacks/html.svg" },
  { name: "CSS", urlImage: "/images/icons-stacks/css.svg" },
  { name: "JAVASCRIPT", urlImage: "/images/icons-stacks/js.svg" },
  { name: "NODEJS", urlImage: "/images/icons-stacks/node.svg" },
  { name: "REACTJS", urlImage: "/images/icons-stacks/react.svg" },
  { name: "TAILWINDCSS", urlImage: "/images/icons-stacks/tailwind.svg" },
  { name: "TYPESCRIPT", urlImage: "/images/icons-stacks/typescript.svg" },
  { name: "MYSQL", urlImage: "/images/icons-stacks/mysql.svg" },
  { name: "NEXTJS", urlImage: "/images/icons-stacks/nextjs.svg" },
  { name: "REACT NATIVE", urlImage: "/images/icons-stacks/react.svg" },
];

export default function Stacks() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween" }}
        id="tecnologias"
      >
        <h1 className="mb-12 text-font-color dark:text-font-color-dark uppercase text-2xl font-bold">
          Tecnologias
        </h1>
        <div className="flex flex-wrap gap-4 items-center ">
          {skills.map((item) => {
            return (
              <span
                key={item}
                className="px-4 py-2 flex gap-4 bg-secondary-light dark:bg-secondary-dark text-font-color rounded-full border  dark:text-font-color-dark  font-bold  border-[#848484] "
              >
                <div className="w-[22px] h-5 relative">
                  <Image src={item.urlImage} fill alt="Icone stack" />
                </div>
                {item.name}
              </span>
            );
          })}
        </div>
      </motion.section>
    </>
  );
}
