import BtnLink from "@/components/buttons/BtnLink";
import Cardprojects from "@/components/card-projects/Cardprojects";
import { getProjectsHome } from "@/services/home";
import Image from "next/image";

export default async function Project() {
  const { allProjects } = await getProjectsHome();

  return (
    <>
      <section className="mb-12 px-4 md:px-0 bg-secondary-dark">
        <div className="md:w-[900px] w-full mx-auto py-6 md:py-40">
          {allProjects.map((item, index) => {
            return (
              <div
                key={item.name}
                className={`grid gap-10 md:gap-40 grid-cols-1  md:grid-cols-2 mb-20`}
              >
                <Image
                  src={item.cover.url}
                  width={609}
                  height={346}
                  className={` rounded-lg ${
                    index % 2 === 0 ? "order-1 md:order-2" : ""
                  } `}
                />
                <div
                  className={` relative ${
                    index % 2 === 0 ? "order-2 md:order-1" : ""
                  } `}
                >
                  <h2 className="text-white font-bold text-3xl text-left">
                    {item.name}
                  </h2>
                  <div className="pt-6 text-white  text-left">
                    <p className="break-words text-zinc-400">
                      {item.summaryContent}
                    </p>
                  </div>
                  <div className="md:absolute text-center mt-10 md:bottom-0">
                    <BtnLink href={`/projetos/${item.slug}`}>
                      Saiba mais
                    </BtnLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
