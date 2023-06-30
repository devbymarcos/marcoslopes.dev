"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function CardCmape({ children, title, urlImg }) {
  const titleRef = useRef();
  const linkRef = useRef();
  const { push } = useRouter();

  function titleChangeColor(e) {
    titleRef.current.classList.toggle("navigation");
  }

  function navAction() {
    push(`/${linkRef.current.id}`);
  }

  return (
    <>
      <article
        onMouseEnter={titleChangeColor}
        onMouseLeave={titleChangeColor}
        onClick={navAction}
        className="w-full transition-all hover:bg-[#18274B]/50 md:max-w-[956px] md:mx-auto  h-[300px]  border-2 border-transparent  rounded-md px-[20px] py-[39px] grid grid-cols-[239px_1fr] hover:backdrop-opacity-10 cursor-pointer"
      >
        <div className="w-[190px] h-[112px] overflow-hidden relative rounded-sm">
          <Image
            className="object-cover"
            src="/images/cmape.png"
            alt="imagem do projeto"
            fill
          />
        </div>
        <div>
          <Link
            id="cmape"
            ref={linkRef}
            href="/cmape"
            className="text-white inline-flex  text-[20px] mb-3"
          >
            <h2
              ref={titleRef}
              className={` text-white transition-all  flex items-center gap-3`}
            >
              {title}
              <ArrowUpRight size={16} />
            </h2>
          </Link>
          <p className={` text-white `}>{children}</p>
        </div>
      </article>
    </>
  );
}
