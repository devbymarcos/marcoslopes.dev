import "./globals.css";
import Header from "../components/header/header";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Marcos Lopes | javascript developer",
  description: "Ola você chegou em meu site pessoal veja meus trabalhos",
};

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={`${poppins.variable} bg-color-primary`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
