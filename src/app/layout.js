import Header from "@/components/header/Header";
import "./globals.css";

import { montserrat } from "@/app/fonts";
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
      <body
        className={`${montserrat.className} h-screen bg-primary-light dark:bg-primary-dark`}
      >
        <Header />
        <div className="container-custom px-4 ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
