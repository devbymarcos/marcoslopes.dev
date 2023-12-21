import Link from "next/link";
import Image from "next/image";

const Cardprojects = ({ children, title, urlImg, alt, urlLink, category }) => {
  return (
    <>
      <Link
        data-category={category}
        href={urlLink}
        className={`filter-list transition-all `}
      >
        <div
          className={`relative aspect-video mb-4 rounded-lg overflow-hidden`}
        >
          <Image src={urlImg} alt={alt ? alt : "cover image"} fill />
        </div>
        <div className="">
          <h1 className="text-font-color  dark:text-font-color-dark text-lg text-center font-bold">
            {title}
          </h1>
          {children}
        </div>
      </Link>
    </>
  );
};

export default Cardprojects;
