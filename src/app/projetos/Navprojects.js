"use client";
import Btn from "@/components/buttons/Btn";

const Navprojects = ({ content }) => {
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
    <section className="my-20">
      <nav className="flex justify-center">
        <ul className="flex gap-3 flex-wrap">
          {content.allCategoryFilters.map((item) => {
            return (
              <li key={item.name}>
                <button
                  className="bg-color-purple rounded-full px-4 py-2 text-lg text-white"
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
