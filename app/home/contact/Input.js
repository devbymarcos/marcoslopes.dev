export function Input({ label, type, value, onChange, place, classIf }) {
  return (
    <div className="mb-11 w-full">
      <label className="mb-4 block text-white">{label}</label>
      <input
        className={`w-full p-5 border-transparent outline-none bg-black text-white ${
          classIf && classIf
        }`}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={place}
      />
    </div>
  );
}

export function TextArea({ label, onChange, value, place, classIf }) {
  return (
    <>
      <div className="mb-11">
        <label className="mb-4 block text-white">{label}</label>
        <textarea
          className={` w-full p-5 border-transparent outline-none bg-black text-white ${
            classIf && classIf
          }`}
          rows="5"
          onChange={onChange}
          value={value}
          placeholder={place}
        />
      </div>
    </>
  );
}
