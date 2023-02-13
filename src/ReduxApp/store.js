import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../ReduxFeature/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
