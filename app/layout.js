import "./globals.css";

export const metadata = {
  title: "Marcos Lopes | javascript developer",
  description: "Ola você chegou em meu site pessoal veja meus trabalhos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className="">{children}</body>
    </html>
  );
}
