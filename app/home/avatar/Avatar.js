import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <div className="w-[300px] h-[300px] transition-all rounded-full mx-auto   overflow-hidden  border-2 border-color-purple  my-40 ">
        <Image
          className="object-cover p-3 rounded-full"
          src="/images/avatar/marcos-n.png"
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
