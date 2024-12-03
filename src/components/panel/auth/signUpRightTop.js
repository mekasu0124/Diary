export default function SignUpRightTop({ props, confirmPassword, handleChange }) {
  return (
    <div className="flex flex-col items-center justify-evenly w-[45%] h-[350px] p-2 ml-2 mr-2 border-2 border-bdr rounded-lg overflow-y-auto">
      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="phone" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Phone
        </label>

        <input
          type="text"
          id="phone"
          name="phone"
          required
          value={props.phone}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="birthday" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Birthday
        </label>

        <input
          type="date"
          id="birthday"
          name="birthday"
          required
          value={props.birthday}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="emailAddress" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Email Address
        </label>

        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          required
          value={props.emailAddress}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="username" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Create Username
        </label>

        <input
          type="text"
          id="username"
          name="username"
          required
          value={props.username}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="password" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Create Password
        </label>

        <input
          type="text"
          id="password"
          name="password"
          required
          value={props.password}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex flex-row items-center justify-center w-[90%] mb-3 mt-3">
        <label htmlFor="confirmPassword" className="font-rancho italic text-fg text-xl text-center w-[35%] tracking-widest">
          Confirm Password
        </label>

        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
          className="font-rancho italic bg-gray-600 border-2 border-bdr rounded-lg p-2 text-fg text-xl text-center w-[60%] tracking-widest outline-none hover:bg-bdr hover:border-black hover:text-black hover:transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
};