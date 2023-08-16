import "./globals.css";

import { source } from "@/app/fonts";

export const metadata = {
  title: "Marcos juvêncio | javascript developer",
  description: "Ola você chegou em meu site pessoal veja meus trabalhos",
  openGraph: {
    title: "Marcos juvencio",
    description: "Javascript developer and Reactjs",
    url: "https://devbymarcos.com.br",
    siteName: "Marcos Juvencio",
    images: [
      {
        url: "https://devbymarcos.com.br/screenshot.png",
        width: 1800,
        height: 1600,
        alt: "Apresentação do site",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={`${source.className} h-screen bg-color-primary`}>
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
