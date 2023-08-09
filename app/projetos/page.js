"use client";
import Card from "@/components/CardLink/Card";
import Btn from "@/components/buttons/Btn";

import { useRef } from "react";

export const metadata = {
  title: "Marcos Lopes | Projetos",
  description: "Aqui você pode ver alguns projetos meus realizados",
};

export default function Projetos() {
  const category = {
    ALL: "all",
    SITE: "site",
    APP: "app",
    GAME: "game",
    UTIL: "util",
  };

  const dataProject = [
    {
      title: "Clínica Cmape",
      urlImg: "/images/cmape.gif",
      alt: "gif para site cmape",
      urlLink: "/projetos/cmape",
      category: category.SITE,
    },
    {
      title: "Site dBmcode",
      urlImg: "/images/dbmcode.gif",
      alt: "gif para site dbmcode",
      urlLink: "/projetos/dbmcode",
      category: category.SITE,
    },
    {
      title: "Gerador de senhas ",
      urlImg: "/images/createpasswd.gif",
      alt: "gif para apresentar o gerador de senha",
      urlLink: "/projetos/createpasswd",
      category: category.UTIL,
    },
    {
      title: "Type Writer",
      urlImg: "/images/typewriter.gif",
      alt: "gif para apresentar efeito de digitação",
      urlLink: "/projetos/typewriter",
      category: category.UTIL,
    },
    {
      title: "Descubra a palavra",
      urlImg: "/images/guess-word.gif",
      alt: "gif para apresentar efeito de digitação",
      urlLink: "/projetos/descubra-palavra",
      category: category.GAME,
    },
    {
      title: "Wallet Control",
      urlImg: "/images/wallet-control.gif",
      alt: "gif para apresentar efeito de digitação",
      urlLink: "/projetos/wallet-control",
      category: category.APP,
    },
  ];

  function filterElement(event) {
    const filterCondintional = event.target.innerText.toLowerCase();
    const filterContent = document.querySelectorAll(".filter-list");

    filterContent.forEach((itemDom) => {
      if (filterCondintional != "all") {
        itemDom.style.opacity = "0";
        setTimeout(() => {
          if (itemDom.dataset.category != filterCondintional) {
            itemDom.style.display = "none";
          } else {
            itemDom.style.display = "inherit";
            itemDom.style.opacity = "1";
          }
        }, 700);
      } else {
        itemDom.style.display = "inherit";
        itemDom.style.opacity = "1";
      }
    });
  }

  return (
    <>
      <div className="pt-28 container">
        <section className="my-20">
          <nav className="flex justify-center">
            <ul className="flex gap-3 flex-wrap">
              {Object.keys(category).map((item, index) => {
                return (
                  <li key={index}>
                    <Btn onClick={filterElement}>{category[item]}</Btn>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-11 px-2">
            {dataProject.map((item, index) => {
              return (
                <Card
                  key={item.title}
                  title={item.title}
                  urlImg={item.urlImg}
                  alt={item.alt}
                  urlLink={item.urlLink}
                  category={item.category}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
