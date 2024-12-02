// import modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import hooks
import { useAuth } from '../../hooks/authContext';

// import individual components
import TitleBar from "../../components/individual/titleBar";
import CustomLabel from "../../components/individual/label";
import CustomInput from "../../components/individual/input";
import CustomLink from "../../components/individual/link";

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');

  const login = useAuth();
  const navigate = useNavigate('');

  const handleChange = async (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(loginData);

      if (response.status === 200) {
        setSuccessText(response.data.message);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
          setSuccessText('');

          return navigate('/');
        }, 3000);
      } else {
        setErrorText(response.error.message);
        setIsError(true);

        setTimeout(() => {
          setIsError(false);
          return setErrorText('');
        }, 5000);
      };
    } catch (err) {
      console.error(err);

      setErrorText(err.message);
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
        return setErrorText('');
      }, 5000);
    };
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <TitleBar props={{ title: 'Login To Get Started', subTitle: 'All Inputs Required' }} />

      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly w-full flex-1 mt-5">
        <div className="flex flex-col items-center justify-evenly w-[60%] h-[400px] border-bdr border-2 rounded-xl shadow-black shadow-xl">
          <div className="flex flex-row items-center justify-center w-full">
            <CustomLabel props={{ htmlFor: 'username', text:"Username" }} />
            <CustomInput 
              props={{ 
                type: 'text',
                id: 'username',
                name: 'username',
                disabled: false,
                value: loginData.username,
              }}
              handleChange={handleChange}
            />
          </div>

          <div className="flex flex-row items-center justify-center w-full">
            <CustomLabel props={{ htmlFor: 'password', text: 'Password' }} />
            <CustomInput
              props={{
                type: 'password',
                id: 'password',
                name: 'password',
                disabled: false,
                value: loginData.password,
              }}
              handleChange={handleChange}
            />
          </div>
        </div>

        {/* error area */}
        {isError && (
          <div className="font-rancho font-bold italic text-fg text-xl text-center w-[40%]">{errorText}</div>
        )}

        {isError && (
          <div className="font-rancho font-bold italic text-fg text-xl text-center w-[40%]">{errorText}</div>
        )}

        {/* button area */}
        <div className="flex flex-row items-center justify-center w-full flex-shrink-0">
          <div className="flex flex-col items-center justify-evenly w-[45%] ml-2 mr-2">
            <CustomLink props={{ link: '/', text: 'Cancel' }} />
            <CustomLink props={{ link: '/auth/signup', text: 'Sign Up' }} />
          </div>

          <div className="flex flex-col items-center justify-evenly w-[45%] ml-2 mr-2">
            {/* Custom Button */}
            <CustomLink props={{ link: '/auth/forgot', text: 'Forgot Username/Password' }} />
          </div>
        </div>
      </form>
    </div>
  );
};
