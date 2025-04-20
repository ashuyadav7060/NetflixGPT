import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [signup, setsignup] = useState(false);
  const handlesignup = () => {
    setsignup(!signup);
  };
  const handlesignin = () => {
    setsignup(!signup);
  };
  return (
    <>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_medium.jpg"
          alt=" Ashu"
        />
      </div>
      <form className=" absolute p-12 bg-black w-100  my-24 mx-auto right-0 left-0 text-white gap-10 opacity-80">
        <h1 className="text-white my-2 text-3xl font-high font-bold ">
          {signup ? "Sign Up" : "Sign In"}
        </h1>
        {signup ? (
          <input
            className="p-3 my-3  w-76   rounded  bg-black opacity-40 border-1 placeholder-white"
            type="text"
            placeholder="Enter your Name"
          />
        ) : (
          <></>
        )}

        <input
          className="p-3 my-3  w-76   rounded  bg-black opacity-40 border-1 placeholder-white"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <input
          className="p-3  w-76 rounded bg-black opacity-40 border-1  placeholder-white"
          type="password"
          placeholder="Password"
        />
        <button className="w-76 my-3 text-white p-2 m  font-medium  bg-red-600 rounded cursor-pointer hover:bg-red-800">
          {signup ? "Sign Up" : "Sign In"}
        </button>
        {signup ? (
          <>
            <p className="py-4  ">
              Already a user?{" "}
              <span
                className=" cursor-pointer hover:text-blue-400"
                onClick={handlesignin}
              >
                SignIn Now
              </span>{" "}
            </p>
          </>
        ) : (
          <p className="py-4 ">
            New to Netflix?{" "}
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={handlesignup}
            >
              Sign up Now
            </span>
          </p>
        )}
      </form>
    </>
  );
};

export default Login;
