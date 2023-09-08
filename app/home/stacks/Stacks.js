import Image from "next/image";

export default function Stacks() {
  const dataStack = [
    {
      name: "Html",
      srcImg: "/images/stacks-logo/html.png",
      alt: "logo html",
    },
    {
      name: "Css",
      srcImg: "/images/stacks-logo/css.png",
      alt: "logo css",
    },
    {
      name: "Javascript",
      srcImg: "/images/stacks-logo/javascript.png",
      alt: "logo javascript",
    },
    {
      name: "reactjs",
      srcImg: "/images/stacks-logo/reactjs.png",
      alt: "logo reactjs",
    },
    {
      name: "nextjs",
      srcImg: "/images/stacks-logo/nextjs.png",
      alt: "logo nextjs",
    },
    {
      name: "tailwind",
      srcImg: "/images/stacks-logo/tailwind.png",
      alt: "logo tailwind",
    },
    {
      name: "python",
      srcImg: "/images/stacks-logo/python.png",
      alt: "logo python",
    },
    {
      name: "node",
      srcImg: "/images/stacks-logo/node.png",
      alt: "logo node",
    },
    // {
    //   name: "typescript",
    //   srcImg: "/images/stacks-logo/typescript.png",
    //   alt: "logo typescript",
    // },
  ];
  return (
    <>
      <section id="tecnologias" className=" h-auto md:h-screen  my-28  pt-28">
        <h1 className="mb-2 text-white uppercase text-2xl font-bold">
          Tecnologias
        </h1>
        <p className="text-white mb-10">
          Tecnologias que conheço até o momento
        </p>
        <div className="grid realtive grid-cols-4 gap-4 h-auto">
          {dataStack.map((item) => {
            return (
              <Image
                key={item.name}
                src={item.srcImg}
                width={90}
                height={90}
                alt={item.alt}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
