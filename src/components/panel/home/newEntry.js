import TitleBar from "../../individual/titleBar";

import CustomLabel from '../../individual/label';
import CustomInput from "../../individual/input";


export default function NewEntry() {
  return (
    <div className="flex flex-col items-center justify-start w-[45%] ml-2 mr-2 p-2 h-[700px] border-2 border-bdr rounded-xl shadow-shadow shadow-lg">
      <TitleBar
        props={{
          title: 'Create A New Entry',
          subTitle: 'All Entries Are Required',
        }} />

      <form className="flex flex-col items-center justify-start w-full flex-1 mt-2">
        <div className="flex flex-col items-center justify-start w-full flex-1">
          <div className="flex flex-row items-center justify-center w-[90%] mt-1 mb-1">
            <CustomLabel 
              props={{ 
                htmlFor: "date", 
                text: "Today's Date"
              }} />

            <CustomInput
              props={{
                type: 'date',
                id: 'date',
                name: 'date',
                disabled: true,
              }} />
          </div>

          <div className="flex flex-row items-center justify-center w-[90%] mt-1 mb-1">
            <label
              htmlForm="time"
              className="font-rancho italic text-xl text-fg textShadow tracking-widest">

              </label>

            <input
              type="time"
              id="time"
              name="time"
              className="font-rancho italic text-xl text-fg tracking-widest outline-none hover:outline-none hover:bg-hvr hover:text-black focus:outline-none" />
          </div>

          <div className="flex flex-row items-center justify-center w-[90%] mt-1 mb-1">
            <label
              htmlForm="title"
              className="font-rancho italic text-xl text-fg textShadow tracking-widest">

              </label>

            <input
              type="text"
              id="title"
              name="title"
              className="font-rancho italic text-xl text-center text-fg tracking-widest outline-none hover:outline-none hover:bg-hvr hover:text-black focus:outline-none" />
          </div>

          <div className="flex flex-row items-center justify-center w-[90%] mt-1 mb-1">
            <label
              htmlForm="entry"
              className="font-rancho italic text-xl text-fg textShadow tracking-widest">

              </label>

            <textarea
              id="entry" 
              name="entry"
              className="font-rancho italic text-xl text-fg tracking-widest outline-none hover:outline-none hover:bg-hvr hover:text-black focus:outline-none p-l-2"></textarea>
          </div>
        </div>

        <div className=""></div>
      </form>
    </div>
  );
};
