import { Link } from "react-router-dom";

export default function SignUpLeftTop({ props, handleChange }) {
  return (
    <div className="flex flex-col items-center justify-start w-[45%] h-[350px] p-2 ml-2 mr-2 border-2 border-bdr rounded-lg overflow-y-auto">
      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="firstName" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          First Name
        </label>

        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          value={props.firstName}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="lastName" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Last Name
        </label>

        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          value={props.lastName}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="preferredName" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Preferred Name
        </label>

        <input
          type="text"
          id="preferredName"
          name="preferredName"
          required
          value={props.preferredName}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="street" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Street Address
        </label>

        <input
          type="text"
          id="street"
          name="street"
          required
          value={props.street}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="city" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          City
        </label>

        <input
          type="text"
          id="city"
          name="city"
          required
          value={props.city}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="province" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          State/Province
        </label>

        <input
          type="text"
          id="province"
          name="province"
          required
          value={props.province}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="postal" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Postal Code
        </label>

        <input
          type="text"
          id="postal"
          name="postal"
          required
          maxLength="5"
          value={props.postal}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="country" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Country
        </label>

        <input
          type="text"
          id="lastName"
          name="country"
          required
          value={props.country}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
};
