import Link from "next/link";
import { BlurHome } from "@/app/home/blur/blurHome";
export default function Home() {
  return (
    <>
      <section className="pt-28  ">
        <BlurHome />
        <div className="flex gap-3 items-center ">
          <Link
            className="px-5 py-3 text-md border-2 transition-all inline-block border-color-purple rounded-full font-bold text-white hover:bg-color-purple uppercase"
            href="/#contato"
          >
            Mensagem
          </Link>
          <a
            target="_blank"
            className="px-5 py-3 text-md border-2 transition-all inline-block border-green-500 rounded-full font-bold text-white hover:bg-green-500 uppercase"
            href="https://api.whatsapp.com/send?phone=5541992169810&text=Tenho%20trabalho%20vamos%20conversar"
          >
            whatsapp
          </a>
        </div>
      </section>
    </>
  );
}
