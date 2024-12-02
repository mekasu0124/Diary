export default function CustomInput({ props, handleChange }) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={handleChange}
      disabled={props.disabled}
      className="font-rancho italic text-xl text-center w-[40%] text-black bg-gray-600 border-black border-2 rounded-lg tracking-widest outline-none hover:outline-none focus:outline-none" />
  );
};
