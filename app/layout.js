import "./globals.css";

import { source } from "@/app/fonts";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={`${source.className} h-screen bg-color-primary`}>
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
