export default function CustomButton({ props, onClick }) {
  return (
    <button
      type={props.type}
      onClick={onClick ? onClick : null}
      className="font-rancho italic text-2xl text-fg text-center tracking-widest border-2 border-bdr rounded-full w-[300px] p-2 mb-5 mt-5 hover:bg-bdr hover:text-black hover:underline hover:transition-transform duration-300 hover:scale-105">
      {props.text}
    </button>
  );
};
