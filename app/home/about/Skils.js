export default function Skills() {
  const stacks = [
    "HTML",
    "CSS",
    "JavaScript",
    "Reactjs",
    "SVELTEKIT",
    "Nodejs",
    "MYSQL",
    "PHP",
    "Git",
    "GitHub",
    "Figma",
    "TailwindCSS",
  ];

  return (
    <>
      <div className="flex items-start flex-wrap h-auto  gap-3">
        {stacks.map((item) => {
          return (
            <span className="py-2 px-3 text-white rounded-md bg-color-secondary inline-flex">
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
}
