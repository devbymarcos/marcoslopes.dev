const Btn = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={` py-4 px-6 border-2 border-color-purple hover:bg-color-purple text-white font-bold   rounded-md uppercase`}
      >
        {children}
      </button>
    </>
  );
};

export default Btn;
