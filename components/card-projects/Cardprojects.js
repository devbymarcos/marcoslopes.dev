import style from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

const Cardprojects = ({ children, title, urlImg, alt, urlLink, category }) => {
  return (
    <>
      <Link
        data-category={category}
        href={urlLink}
        className={`filter-list ${style.card}`}
      >
        <div className={style.cardBoxImage}>
          <Image src={urlImg} alt={alt} fill />
        </div>
        <div className={style.cardBody}>
          <h1>{title}</h1>
          {children}
        </div>
      </Link>
    </>
  );
};

export default Cardprojects;
