import { Menu, X } from "lucide-react";

export default function BtnMobile({ open = false, onClick }) {
  return (
    <>
      {open && (
        <button onClick={onClick} className="md:hidden">
          <X color="#fff" size={32} />
        </button>
      )}
      {!open && (
        <button onClick={onClick} className="md:hidden   ">
          <Menu color="#fff" size={32} />
        </button>
      )}
    </>
  );
}
