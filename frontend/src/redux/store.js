import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        userLogin: userSlice,
    }
})

export default store;