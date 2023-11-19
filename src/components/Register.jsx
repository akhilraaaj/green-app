import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Register = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="text-center w-100">
      <h2 className="text-xl font-bold text-gray-800"> New User</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} className="text-[#FFFFFF] placeholder:text-[#FFFFFF] bg-[#1F191966] rounded-full" />
        <input placeholder="Name" type="name" ref={nameRef} className="text-[#FFFFFF] placeholder:text-[#FFFFFF] bg-[#1F191966] rounded-full" />
        <input placeholder="Password" type="password" ref={psdRef} className="text-[#FFFFFF] placeholder:text-[#FFFFFF] bg-[#1F191966] rounded-full" />
        <button className="custom-btn rounded-full text-white font-bold" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;