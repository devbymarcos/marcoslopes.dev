import "./globals.css";

export const metadata = {
  title: "Marcos Lopes developer",
  description: "Aqui apresento meu trabalhos realizados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
