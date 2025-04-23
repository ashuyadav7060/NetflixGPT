import { FaUserCircle } from "react-icons/fa";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Useractions } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;
        dispatch(
          Useractions.addUser({
            uid: uid,
            displayName: displayName,
            email: email,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(Useractions.removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-30 flex justify-between">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
        {user && (
          <div className="flex p-4 ">
            <FaUserCircle className="w-8 h-8" />
            <button
              onClick={handleSignOut}
              className="bg-red-700 text-white px-2 rounded font-medium cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
