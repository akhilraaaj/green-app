import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };


  return (
    <div className="text-center w-100">
      <h2 className="text-xl font-bold text-gray-800"> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} className="text-[#FFFFFF] placeholder:text-[#FFFFFF] bg-[#1F191966] rounded-full" />
        <input placeholder="Password" type="password" ref={psdRef} className="text-[#FFFFFF] placeholder:text-[#FFFFFF] bg-[#1F191966] rounded-full" />
        <button className="custom-btn rounded-full text-white font-bold" type="submit">Login</button>
        <p onClick={forgotPasswordHandler}  style={{ color: 'hsla(129, 51%, 43%, 1)' }} className="cursor-pointer mt-2">Forgot Password?</p>
      </form>
    </div>
  );
};

export default Login;