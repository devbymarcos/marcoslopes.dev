import Card from "@/components/CardLink/Card";
import Btn from "@/components/buttons/Btn";

export const metadata = {
  title: "Marcos Lopes | Projetos",
  description: "Aqui você pode ver alguns projetos meus realizados",
};

export default function Projetos() {
  const categry = ["site", "app", "game", "util"];

  return (
    <>
      <div className="pt-28 container">
        <section className="my-20">
          <nav className="flex justify-center">
            <ul className="flex gap-3 flex-wrap">
              {categry.map((item, index) => {
                return (
                  <li key={index}>
                    <Btn>{item}</Btn>
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
              urlImg="/images/guess-word.gif"
              alt="gif para apresentar efeito de digitação"
              urlLink="/projetos/descubra-palavra"
              category="utilities"
            ></Card>
            <Card
              title="Wallet Control"
              urlImg="/images/wallet-control.gif"
              alt="gif para apresentar efeito de digitação"
              urlLink="/projetos/wallet-control"
              category="utilities"
            ></Card>
          </div>
        </section>
      </div>
    </>
  );
}
