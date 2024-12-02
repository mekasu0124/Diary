export default function TitleBar({ props }) {
  if (props.imgPath && props.title && props.subTitle) {
    return (
      <div className="flex flex-row items-center justify-center w-full flex-shrink-0 border-b-2 border-b-bdr">
        <div className="flex flex-row items-center justify-start w-full p-2">
          <img src={props.imgPath} alt="Mek's Diary Icon" width="100" height="100" className="rounded-full" />
        </div>
  
        <div className="flex flex-col items-center justify-evenly w-full">
          <h1 className="font-rancho italic text-2xl text-fg text-end w-[90%] tracking-widest">
            {props.title}
          </h1>
  
          <h3 className="font-rancho italic text-lg text-fg text-end w-[90%] tracking-widest">
            {props.subTitle}
          </h3>
        </div>
      </div>
    );
  } else if (props.title && props.subTitle) {
    return (
      <div className="flex flex-row items-center justify-center w-full flex-shrink-0 border-b-2 border-b-bdr">
        <div className="flex flex-col items-center justify-evenly w-full">
          <h1 className="font-rancho italic text-2xl text-fg text-center w-[90%] tracking-widest">
            {props.title}
          </h1>
  
          <h3 className="font-rancho italic text-lg text-fg text-center w-[90%] tracking-widest">
            {props.subTitle}
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row items-center justify-center w-full flex-shrink-0 border-b-2 border-b-bdr">
        <div className="flex flex-col items-center justify-evenly w-full">
          <h1 className="font-rancho italic text-2xl text-fg text-center w-[90%] tracking-widest">
            {props.title}
          </h1>
        </div>
      </div>
    );
  };
};
