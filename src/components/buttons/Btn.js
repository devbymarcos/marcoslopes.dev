const Btn = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={` py-3 px-6  bg-indigo-600 rounded-lg text-white font-bold    uppercase`}
      >
        {children}
      </button>
    </>
  );
};

export default Btn;
