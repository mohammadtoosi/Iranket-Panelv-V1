import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const confirmMobileSlice = createSlice({
    name: "confirm-mobile",
    initialState: initialState,
    reducers: {
        toggleConfirmForm: (state) => {
            state.show = !state.show;
        },
    },
});

export const ConfirmActions = confirmMobileSlice.actions;

export default confirmMobileSlice.reducer;
