import Image from "next/image";

export default function Cursos() {
  return (
    <section className="container-custom  mt-[150px]">
      <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        <div className="text-white ">
          <div className="w-full h-[150px] relative">
            <Image src={`/images/ubuntu.png`} fill className="rounded-lg" />
          </div>
          <h3 className="text-white my-2 font-bold">Ubuntu esta na hora</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="text-white ">
          <div className="w-full h-[150px] relative">
            <Image src={`/images/ubuntu.png`} fill className="rounded-lg" />
          </div>
          <h3 className="text-white my-2 font-bold">Ubuntu esta na hora</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="text-white ">
          <div className="w-full h-[150px] relative">
            <Image src={`/images/ubuntu.png`} fill className="rounded-lg" />
          </div>
          <h3 className="text-white my-2 font-bold">Ubuntu esta na hora</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </section>
  );
}
