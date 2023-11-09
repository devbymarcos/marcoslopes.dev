import Header from "@/components/header/Header";
import "./globals.css";

import { anonymousPro } from "@/app/fonts";
import Footer from "@/components/footer/Footer";

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
      <body className={`${anonymousPro.className} h-screen bg-color-primary`}>
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
