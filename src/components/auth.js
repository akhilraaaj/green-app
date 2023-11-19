import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);  
  };

  return (
    <div className="flex flex-col items-center justify-center p-28">
        <img src="header.png" height={70} width={70} className="mb-4" alt="header-img " />
        <h1 className="text-[#36A546CC] font-extrabold text-lg">We are Electric</h1>
        {!index ? <Login /> : <Register />}
        <p className="cursor-pointer mt-4" style={{ color: 'hsla(129, 51%, 43%, 1)' }}  onClick={toggleIndex}>
          {!index ? "New user? Click here " : "Already have an account?"}
        </p>
    </div>
  );
};

export default Auth;
