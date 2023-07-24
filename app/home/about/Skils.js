export default function Skills() {
  const stacks = [
    "HTML",
    "CSS",
    "JavaScript",
    "Reactjs",
    "Nextjs",
    "Nodejs",
    "MYSQL",
    "Git",
    "GitHub",
    "Figma",
    "TailwindCSS",
  ];

  return (
    <>
      <div>
        <h2 className="text-white font-bold mb-3 text-3xl">Skills</h2>
        <div className="flex items-start flex-wrap h-auto  gap-3">
          {stacks.map((item) => {
            return (
              <span
                key={item}
                className="py-2 px-3 text-white rounded-md bg-color-secondary inline-flex"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
