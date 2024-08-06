export const projects = [
  {
    name: "Jogo da memória",
    cover: {
      url: "/minhaimagem",
    },
    text1: "Pontuação",
    text2: "Localstorage",
    text3: "Match de virada",
    text4: "Efeito vira cartas",
    slug: "jogo-da-memoria",
    sumary:
      "Jogo criado com Javascript Puro utilizando ferramenta de buil Vitejs",
    content: `<p>RECURSOS TECNOLÓGICOS:</p>
            <ul>
                <li>Vitejs - (build otimização de código)</li>
                <li>JavaScript (linguagem pura</li>
                <li>CSS</li>
                </ul>

                <p>RECURSOS DO GAME:</p>

                <ul>
                <li>O play vira as cartas para memorizar durante 5 secundos</li>
                <li>cadas acerto ganha um movimento</li>
                <li>Inicia com 20 movimentos </li>
                <li>cada erro desconta 1 movimento</li>
                <li>persistencia em localStorage da pontuação máxima
                *</li>
            </ul>`,
    technology: [{ name: "Javascript" }, { name: "Html" }, { name: "CSS" }],
  },
];
