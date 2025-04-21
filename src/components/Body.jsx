import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { Useractions } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        // User is signed out
        dispatch(Useractions.removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
