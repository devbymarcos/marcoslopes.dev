const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Python",
  "flask-python",
  "Node",
  "Nextjs",
  "Reacjs",
  "PHP",
  "Git",
  "GitHub",
  "TailwindCss",
];

export default function Stacks() {
  return (
    <>
      <section id="tecnologias" className="">
        <h1 className="mb-12 text-font-color dark:text-font-color-dark uppercase text-2xl font-bold">
          Tecnologias
        </h1>
        <div className="flex flex-wrap gap-4 items-center ">
          {skills.map((item) => {
            return (
              <span className="p-4 bg-secondary-light dark:bg-secondary-dark text-font-color dark:text-font-color-dark rounded font-bold ">
                {item}
              </span>
            );
          })}
        </div>
      </section>
    </>
  );
}
