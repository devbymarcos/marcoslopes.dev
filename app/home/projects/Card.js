"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CardCmape({ children, title, urlImg }) {
  const linkRef = useRef();
  const cardRef = useRef();
  const { push } = useRouter();

  function navAction() {
    push(`/${linkRef.current.id}`);
  }

  function handleScroll() {
    const elem = cardRef.current;
    const w = window.innerHeight / 2;
    const e = elem.getBoundingClientRect();

    if (e.top <= w && e.top > 120) {
      cardRef.current.classList.add("navigation");
    } else {
      cardRef.current.classList.remove("navigation");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <article
        onClick={navAction}
        ref={cardRef}
        className="w-full transition-all  md:max-w-[956px] md:mx-auto  h-[300px]  border-2 border-transparent  rounded-md px-[20px] py-[39px] grid grid-cols-[239px_1fr] hover:backdrop-opacity-10 cursor-pointer"
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
