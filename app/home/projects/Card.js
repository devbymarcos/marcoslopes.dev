"use client";

export default function Card({ children, onMouseUp }) {
  return (
    <>
      <article
        onMouseUp={onMouseUp}
        className="w-full transition-all hover:bg-[#18274B]/50 md:max-w-[956px] md:mx-auto  h-[300px]  border-2 border-transparent  rounded-md px-[20px] py-[39px] grid grid-cols-[239px_1fr]"
      >
        {children}
      </article>
    </>
  );
}
