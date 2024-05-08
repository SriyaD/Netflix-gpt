import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/53529d7d-a14c-4416-8478-fd7d29361c0d/US-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-black bg-opacity-40 border border-white rounded-md"
        ></input>}
        
        <input
          type="text"   
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black bg-opacity-40 border border-white rounded-md"
        ></input>
        
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black bg-opacity-40 border border-white rounded-md"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
        {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
