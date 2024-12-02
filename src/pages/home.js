import { useEffect, useState } from "react";
import { useAuth } from '../hooks/authContext';
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  const user = useAuth();
  const navigate = useNavigate('');

  useEffect(() => {
    if (user && user.username) {
      setCurrentUser(user);
    };
  }, [user, setCurrentUser]);

  if (currentUser && currentUser.username) {
    return navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <div className="flex flex-row items-center justify-center w-full flex-shrink-0">
        <div className="flex flex-row items-center justify-start w-full p-2">
          <img src="/images/app-icon.jpeg" alt="Mek's Diary Icon" width="100" height="100" className="rounded-full" />
        </div>

        <div className="flex flex-col items-center justify-evenly w-full">
          <h1 className="font-rancho italic text-2xl text-fg text-end w-[90%] tracking-widest">Mek's Diary</h1>

          <h3 className="font-rancho italic text-lg text-fg text-end w-[90%] tracking-widest">
            A Diary Designed With You In Mind
          </h3>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full flex-1 tracking-widest">
        <div className="flex flex-col items-center justify-start w-[45%] ml-2 mr-2 p-2 h-[700px] border-2 border-bdr rounded-xl shadow-shadow shadow-lg">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-center w-full flex-shrink-0">
              <h3 className="font-rancho font-bold italic underline text-fg text-2xl text-center w-full">
                Previous Entries
              </h3>
            </div>

            <div className="flex flex-col items-center justify-start w-full flex-1">
              <p className="font-rancho italic text-fg text-xl w-[90%] tracking-widest">
                Show previous entries here in a scroll list with each entry having the buttons:
                edit, delete, share for user manipulation and interaction.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start w-[45%] ml-2 mr-2 p-2 h-[700px] border-2 border-bdr rounded-xl shadow-shadow shadow-lg">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-center w-full flex-shrink-0">
              <h3 className="font-rancho font-bold italic underline text-fg text-2xl text-center w-full">
                About The Dairy
              </h3>
            </div>

            <div className="flex flex-col items-center justify-start w-full flex-1">
              <p className="font-rancho italic text-fg text-xl w-[90%] tracking-widest">
                Mek&#39;s Diary is your average dairy application that allows you to securely
                store your entries for later use.
              </p>

              <p className="font-rancho italic text-fg text-xl w-[90%] tracking-widest">
                Re-write to showcase a list of benefits to using the diary like encryption,
                privacy, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full flex-shrink-0">
        <Link
          to="/auth/signup"
          className="font-rancho italic text-2xl text-fg text-center tracking-widest border-2 border-bdr rounded-full w-[300px] p-2 mb-5 mt-5 hover:bg-bdr hover:text-black hover:underline hover:transition-transform duration-300 hover:scale-105">
          Sign Up
        </Link>

        <Link
          to="/auth/login"
          className="font-rancho italic text-2xl text-fg text-center tracking-widest border-2 border-bdr rounded-full w-[300px] p-2 mb-5 mt-5 hover:bg-bdr hover:text-black hover:underline hover:transition-transform duration-300 hover:scale-105">
          Login
        </Link>
      </div>
    </div>
  );
};
