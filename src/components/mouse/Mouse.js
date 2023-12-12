export default function Mouse() {
  return (
    <>
      <div className=" animate-up-down   hidden  absolute md:flex bottom-10 md:gap-2 left-[50%] -translate-x-[50%]  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-down"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
        <span className="text-sm">SCROLL DOWN</span>
      </div>
    </>
  );
}
