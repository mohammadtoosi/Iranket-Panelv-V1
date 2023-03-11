import { configureStore } from "@reduxjs/toolkit";
import ConfirmMobileReducer from "../slice/confirm-mobile";

export const store = configureStore({
    reducer: {
        confirm: ConfirmMobileReducer
    },
});