export function Input({ label, type, value, onChange, place }) {
  return (
    <div className="mb-11 w-full">
      <label className="mb-4 block text-white">{label}</label>
      <input
        className="w-full p-5 border-none outline-none bg-black text-white"
        onChange={onChange}
        type={type}
        value={value}
        placeholder={place}
      />
    </div>
  );
}

export function TextArea({ label, onChange, value, place }) {
  return (
    <>
      <div className="mb-11">
        <label className="mb-4 block text-white">{label}</label>
        <textarea
          className="w-full p-5 border-none outline-none bg-black text-white"
          rows="5"
          onChange={onChange}
          value={value}
          placeholder={place}
        />
      </div>
    </>
  );
}
