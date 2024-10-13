export function Input({ label, type, value, onChange, place, classIf }) {
  return (
    <div className="mb-11 w-full">
      <label className="mb-4 block text-font-color dark:text-font-color-dark">
        {label}
      </label>
      <input
        className={`w-full py-3 px-2 border-transparent rounded-lg outline-none bg-black text-white ${
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
        <label className="mb-4 block text-font-color dark:text-font-color-dark">
          {label}
        </label>
        <textarea
          className={` w-full p-5 border-transparent rounded-lg   outline-none bg-black text-white ${
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
