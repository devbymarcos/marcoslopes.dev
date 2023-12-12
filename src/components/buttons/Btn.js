const Btn = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={` py-4 px-6  bg-pink-custom text-white font-bold    uppercase`}
      >
        {children}
      </button>
    </>
  );
};

export default Btn;
