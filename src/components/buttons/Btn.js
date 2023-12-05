const Btn = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={` py-4 px-6 border-2 bg-btn-primary text-white font-bold   rounded-md uppercase`}
      >
        {children}
      </button>
    </>
  );
};

export default Btn;
