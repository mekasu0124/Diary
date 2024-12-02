export default function CustomInput({ props }) {
  return (
    <input
      type="date"
      id="date"
      name="date"
      disabled={props.disabled}
      className="font-rancho italic text-xl text-center w-[40%] text-black bg-gray-600 border-black border-2 rounded-lg tracking-widest outline-none hover:outline-none focus:outline-none" />
  );
};
