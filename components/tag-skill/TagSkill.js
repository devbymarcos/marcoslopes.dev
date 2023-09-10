export default function TagSkill({ stacks }) {
  console.log(stacks);
  return (
    <>
      <div className="flex items-start flex-wrap h-auto mt-6  gap-3">
        {stacks.map((item) => {
          return (
            <span
              key={item}
              className="py-2 px-3 text-white rounded-md bg-color-secondary "
            >
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
}
