import Card from "@/components/CardLink/Card";
export default function Projetos() {
  const categry = ["site", "app", "game", "util"];

  return (
    <>
      <div className="pt-28 container">
        <section className="my-20">
          <nav>
            <ul className="flex gap-3 ">
              {categry.map((item, index) => {
                return (
                  <li
                    className="text-white uppercase py-2 px-3 bg-color-secondary rounded"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-11 px-2">
            <Card
              title="Clínica Cmape"
              urlImg="/images/cmape.gif"
              alt="gif para site cmape"
              urlLink="/projetos/cmape"
              category="site"
            ></Card>
            <Card
              title="Site dBmcode"
              urlImg="/images/dbmcode.gif"
              alt="gif para site dbmcode"
              urlLink="/projetos/dbmcode"
              category="site"
            ></Card>
            <Card
              title="Gerador de senhas "
              urlImg="/images/createpasswd.gif"
              alt="gif para apresentar o gerador de senha"
              urlLink="/projetos/createpasswd"
              category="utilities"
            ></Card>
            <Card
              title="Type Writer"
              urlImg="/images/typewriter.gif"
              alt="gif para apresentar efeito de digitação"
              urlLink="/projetos/typewriter"
              category="utilities"
            ></Card>
            <Card
              title="Descubra a palavra"
              urlImg="/images/typewriter.gif"
              alt="gif para apresentar efeito de digitação"
              urlLink="/projetos/typewriter"
              category="utilities"
            ></Card>
            <Card
              title="Wallet Control"
              urlImg="/images/typewriter.gif"
              alt="gif para apresentar efeito de digitação"
              urlLink="/projetos/typewriter"
              category="utilities"
            ></Card>
          </div>
        </section>
      </div>
    </>
  );
}
