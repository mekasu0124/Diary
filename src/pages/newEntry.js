

export default function NewEntry() {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <div className="flex justify-center items-center flex-col flex-shrink-0 w-[50%] h-[50px] border-2 border-bdr rounded-lg shadow-shadow shadow-lg m-t-5">
        <h1 className="font-rancho font-bold italic text-2xl text-fg tracking-widest">
          Let&#39;s Create A New Entry...
        </h1>
      </div>

      <form className="">
        <div className="">
          <div className="">
            <label
              htmlForm="date"
              className="font-rancho italic text-xl text-fg textShadow tracking-widest">

              </label>

            <input
              type="date"
              id="date"
              name="date"
              className="font-rancho italic text-xl text-fg tracking-widest outline-none hover:outline-none hover:bg-hvr hover:text-black focus:outline-none" />
          </div>

          <div className="">
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

          <div className="">
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

          <div className="">
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
