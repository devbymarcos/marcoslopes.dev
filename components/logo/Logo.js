import Image from "next/image";

function Logo({ src, w, h }) {
  return <Image src={src} width={w} height={h} alt="logo devbymarcos" />;
}

export default Logo;
