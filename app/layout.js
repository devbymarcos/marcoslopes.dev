import "./globals.css";
import Header from "../components/header/header";
import { source } from "@/app/fonts";
import Footer from "@/components/footer/Footer";

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
