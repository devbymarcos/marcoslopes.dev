import "./globals.css";
import Header from "../components/header/header";
import { Source_Sans_Pro } from "next/font/google";
import Footer from "@/components/footer/Footer";

const source = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body
        className={`${source.className} h-screen bg-color-primary flex flex-col justify-between`}
      >
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
