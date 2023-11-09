import About from "./home/about/About";
import { Contact } from "./home/contact/Contact";
import Home from "./home/Home";

export const metadata = {
  title: "devbymarcos | Prgramador Web",
  description:
    "Um desenvolvedor Web FullStack, criador de soluções computacionais para web",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Marcos | devbymarcos",
    description:
      "Um desenvolvedor Web FullStack, criador de soluções computacionais para web",
    url: "https://devbymarcos.com.br",
    siteName: "Next.js",
    images: "/screenshot.png",
    locale: "pt-BR",
    type: "website",
  },
};

export default function PageIndex() {
  return (
    <>
      <Home />
      <About />
      <Contact />
    </>
  );
}
