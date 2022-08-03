import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        showCart: false
    },
    reducers: {
        setUser: (state:any | object[], action:any ) => {
            state.user = action.payload;
        },
        setShowCart: (state:any | object[], action:any ) => {
            state.showCart = action.payload;
        }
    }
});

export const { setUser, setShowCart } = userSlice.actions;
export default userSlice.reducer;