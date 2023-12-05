export default function Mouse() {
  return (
    <>
      <div className=" w-8 h-14 border-primary-dark hidden md:block absolute bottom-48 left-[50%] -translate-x-[50%] border-2  rounded-full ">
        <span className="w-2 h-2 block bg-primary-dark dark:bg-primary-light rounded-full absolute top-7 left-[9.9px] animate-up-down"></span>
      </div>
    </>
  );
}
