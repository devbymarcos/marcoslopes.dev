import Header from "@/components/header/Header";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
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
  twitter: {
    card: "site",
    title: "Escola programador",
    description: "Aprendar a programar para web na prática",
    images: ["https://devbymarcos.com.br/screenshot.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth dark" lang="pt-Br">
      <body
        className={`${montserrat.className} h-screen bg-primary-light dark:bg-primary-dark`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="G-1ZNBJFK1RP" />
    </html>
  );
}
