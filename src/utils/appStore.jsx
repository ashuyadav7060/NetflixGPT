import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
});

export default appStore;
