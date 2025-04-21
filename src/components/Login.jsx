import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signup, setsignup] = useState(false);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlesignup = () => {
    setsignup(!signup);
  };
  const handlesignin = () => {
    setsignup(!signup);
  };
  const handleButtonClick = () => {
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";
    const nameValue = signup && name.current ? name.current.value : "";

    const message = checkValidate(emailValue, passwordValue, nameValue, signup);
    seterrorMessage(message);

    if (message) return;

    //signin and signup logic

    if (signup) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;

              dispatch(
                Useractions.addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                })
              );

              navigate("/browse");
            })

            .catch((error) => {
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute p-12 bg-black w-100  my-24 mx-auto right-0 left-0 text-white gap-10 opacity-80"
      >
        <h1 className="text-white my-2 text-3xl font-high font-bold ">
          {signup ? "Sign Up" : "Sign In"}
        </h1>
        {signup ? (
          <input
            ref={name}
            className="p-3 my-3  w-76   rounded  bg-black opacity-40 border-1 placeholder-white"
            type="text"
            placeholder="Enter your Name"
          />
        ) : (
          <></>
        )}

        <input
          ref={email}
          className="p-3 my-3  w-76   rounded  bg-black opacity-40 border-1 placeholder-white"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <input
          ref={password}
          className="p-3  w-76 rounded bg-black opacity-40 border-1  placeholder-white"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-3">{errorMessage}</p>
        <button
          className="w-76 my-3 text-white p-2 m  font-medium  bg-red-600 rounded cursor-pointer hover:bg-red-800"
          onClick={handleButtonClick}
        >
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
