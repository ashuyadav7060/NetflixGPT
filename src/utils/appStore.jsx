import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export default appStore;
