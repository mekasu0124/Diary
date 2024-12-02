import TitleBar from "../header/titleBar";

export default function PreviousEntries({ props }) {
  const displayEntries = () => {
    return props.entries.map((entry) => {
      return (
        <div 
          key={entry.id} 
          onClick="" 
          className="flex flex-col items-center justify-start w-[95%] h-[100px] border-bdr border-2 rounded-xl mt-1 mb-1">

          <div className="flex flex-row items-center justify-evenly w-[95%] flex-shrink-0">
            <p className="font-rancho italic text-fg text-base text-center tracking-widest w-[20%]">
              {entry.date}
            </p>

            <h3 className="font-rancho font-bold italic underline text-fg text-xl text-center tracking-widest w-full">
              {entry.title}
            </h3>

            <p className="font-rancho italic text-fg text-base text-center tracking-widest w-[20%]">
              {entry.time}
            </p>
          </div>

          <div className="flex flex-row items-center justify-start w-[95%] flex-1">
            <p className="font-rancho italic text-fg text-base tracking-widest w-full">
              { entry.details.slice(0, 125) + "..." }
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-start w-[45%] ml-2 mr-2 p-2 h-[700px] border-2 border-bdr rounded-xl shadow-shadow shadow-lg">
      <div className="flex flex-col items-center justify-start w-full">
        <TitleBar
          props={{
            title: 'Your Entries',
            subTitle: 'click an entry to edit it',
          }} />

        <div className="flex flex-col items-center justify-start w-full h-[600px] overflow-y-auto mt-3">
          { displayEntries() }
        </div>
      </div>
    </div>
  );
};
