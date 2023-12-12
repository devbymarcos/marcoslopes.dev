import Image from "next/image";

const RedesHome = () => {
  return (
    <>
      <div className="py-4 px-4 rounded w-72  flex justify-between items-center gap-4 mb-12">
        <a title="linkedIn" href="https://www.linkedin.com/in/devbymarcos">
          <Image src="/redes/linkedin.png" width={30} height={30} />
        </a>
        <a title="Youtube" href="https://www.youtube.com/@dbmcode/videos">
          <Image src="/redes/youtube.png" width={30} height={30} />
        </a>
        <a title="Instagram" href="https://www.instagram.com/devbymarcos">
          <Image src="/redes/instagram.png" width={30} height={30} />
        </a>
        <a href="https://github.com/devbymarcos">
          <Image src="/redes/github.png" width={30} height={30} />
        </a>
      </div>
    </>
  );
};

export default RedesHome;
