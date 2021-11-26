import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    appData : []
}

export const appSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setData: (state, action) => {
            //TODO: reducer logic 
        },
    },
});

export const { setData } = appSlice.actions;
export default appSlice.reducer;