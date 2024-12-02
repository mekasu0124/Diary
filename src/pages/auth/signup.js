import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../hooks/api';

import SignUpLeftTop from '../../components/home/auth/signUpLeftTop';
import SignUpRightTop from '../../components/home/auth/signUpRightTop';
import SignUpLeftBottom from '../../components/home/auth/signUpLeftBottom';
import SignUpRightBottom from '../../components/home/auth/signUpRightBottom';


export default function SignUp() {
  const [newUserData, setNewUserData] = useState({
    firstName: '',
    lastName: '',
    preferredName: '',
    phone: '',
    street: '',
    city: '',
    province: '',
    postal: '',
    country: '',
    birthday: '',
    bio: '',
    emailAddress: '',
    username: '',
    password: '',
    securityQuestionOne: '',
    securityAnswerOne: '',
    securityQuestionTwo: '',
    securityAnswerTwo: '',
    securityQuestionThree: '',
    securityAnswerThree: '',
    language: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');

  const navigate = useNavigate('');

  const handleChange = async (e) => {
    if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    } else {
      setNewUserData({
        ...newUserData,
        [e.target.name]: e.target.value,
      });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newUserData.password !== confirmPassword) {
      setErrorText('Passwords Do Not Match! Try Again!');
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
        return setErrorText('');
      }, 5000);
    };

    try {
      const response = await api.post('/auth/signup', newUserData);

      if (response.status === 201) {
        setSuccessText(response.data.message);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
          setSuccessText('');

          return navigate('/auth/login');
        }, 3000);
      } else {
        setErrorText(response.data.message);
        setIsError(true);
  
        setTimeout(() => {
          setIsError(false);
          return setErrorText('');
        }, 5000);
      }
    } catch (err) {
      console.error(err);
    };
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full flex-shrink-0 p-2">
        <h3 className="font-rancho font-bold italic text-fg text-2xl text-center w-full tracking-widest">
          Let's Get You Started With A New Account!
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start w-full flex-1">
        <div className="flex flex-row items-center justify-center w-full flex-1">
          {/* left side, top */}
          <SignUpLeftTop
            props={{
              firstName: newUserData.firstName,
              lastName: newUserData.lastName,
              preferredName: newUserData.preferredName,
              phone: newUserData.phone,
              street: newUserData.street,
              city: newUserData.city,
              province: newUserData.province,
              postal: newUserData.postal,
              country: newUserData.country,
              birthday: newUserData.birthday
            }}
            handleChange={handleChange}
          />

          {/* right side, top */}
          <SignUpRightTop
            props={{
              emailAddress: newUserData.emailAddress,
              username: newUserData.username,
              password: newUserData.password,
              confirmPassword: confirmPassword
            }}
            confirmPassword={confirmPassword}
            handleChange={handleChange} 
          />
        </div>

        <div className="flex flex-row items-center justify-center w-full flex-1">
          {/* left side, bottom */}
          <SignUpLeftBottom
            props={{
              securityQuestionOne: newUserData.securityQuestionOne,
              securityAnswerOne: newUserData.securityAnswerOne,
              securityQuestionTwo: newUserData.securityQuestionTwo,
              securityAnswerTwo: newUserData.securityAnswerTwo,
              securityQuestionThree: newUserData.securityQuestionThree,
              securityAnswerThree: newUserData.securityAnswerThree
            }}
            handleChange={handleChange}
          />

          {/* right side, bottom */}
          <SignUpRightBottom
            props={{ bio: newUserData.bio }}
            handleChange={handleChange}
          />
        </div>

        {/* error area */}
        {isError && (
          <div className="font-rancho font-bold italic text-fg text-xl text-center w-[40%]">{errorText}</div>
        )}

        {isError && (
          <div className="font-rancho font-bold italic text-fg text-xl text-center w-[40%]">{errorText}</div>
        )}

        {/* button area */}
        <div className="flex flex-row items-center justify-evenly w-full flex-shrink-0">
          <Link to="/" className="font-rancho italic text-2xl text-fg text-center tracking-widest border-2 border-bdr rounded-full w-[300px] p-2 mb-5 mt-5 hover:bg-bdr hover:text-black hover:underline hover:transition-transform duration-300 hover:scale-105">
            Cancel
          </Link>

          <Link to="/auth/login" className="font-rancho italic text-2xl text-fg text-center tracking-widest border-2 border-bdr rounded-full w-[300px] p-2 mb-5 mt-5 hover:bg-bdr hover:text-black hover:underline hover:transition-transform duration-300 hover:scale-105">
            Login
          </Link>
          
          <button type="submit" className="font-rancho italic text-2xl text-fg text-center tracking-widest border-2 border-bdr rounded-full w-[300px] p-2 mb-5 mt-5 hover:bg-bdr hover:text-black hover:underline hover:transition-transform duration-300 hover:scale-105">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
