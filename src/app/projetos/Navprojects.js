"use client";

import Spinner from "@/components/spinner/Spinner";
import { useState } from "react";

const Navprojects = ({ content }) => {
  const [activeSpinner, setActiveSpinner] = useState(false);

  function filterElement(event) {
    setActiveSpinner(true);
    console.log(activeSpinner);
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
          setActiveSpinner(false);
        }, 700);
      } else {
        itemDom.style.display = "inherit";
        itemDom.style.opacity = "1";
        setTimeout(() => {
          setActiveSpinner(false);
        }, 700);
      }
    });
  }
  return (
    <section className="my-20">
      <Spinner active={activeSpinner} />
      <nav className="flex ">
        <ul className="flex gap-3 flex-wrap">
          {content.allCategoryFilters.map((item) => {
            return (
              <li key={item.name}>
                <button
                  className="bg-pink-custom  px-4 py-2 text-lg text-white rounded-lg"
                  onClick={filterElement}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Navprojects;
