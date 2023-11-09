import Header from "@/components/header/Header";

export default function ProjectLayout({ children }) {
  return (
    <>
      <Header />
      <div className="projects">{children}</div>
    </>
  );
}
