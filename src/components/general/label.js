export default function CustomLabel({ props }) {
  return (
    <label 
      htmlFor={props.htmlFor} 
      className="font-rancho italic text-2xl text-fg text-center textShadow w-[30%] tracking-widest">
      {props.text}
    </label>
  );
};
