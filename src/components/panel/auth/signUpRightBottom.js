import { useState } from "react";

export default function SignUpRightBottom({ props, handleChange }) {
  const [charCount, setCharCount] = useState(props.bio.length | 0);

  const handleInputChange = async (e) => {
    setCharCount(e.target.value.length);
    handleChange(e);
  };

  return (
    <div className="flex flex-col items-center justify-evenly w-[45%] h-[350px] p-2 ml-2 mr-2 border-2 border-bdr rounded-lb overflow-y-auto">
      <label htmlFor="securityQuestionOne" className="font-rancho italic text-fg text-2xl text-center w-full mt-2 mb-2 tracking-widest">
        Your Biography
      </label>

      <textarea
        id="bio"
        name="bio"
        required
        value={props.bio}
        maxLength={2500}
        onChange={handleInputChange}
        className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-start pl-2 w-[95%] flex-1 tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300" />

      <span className="absolute bottom-32 right-32 text-fg text-sm">
        {charCount} / 2500
      </span>
    </div>
  );
};