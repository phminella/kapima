import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        productCount: 0,
        perPage: 8
    },
    reducers: {
        setProductCount: (state: any | object[], action: any) => {
            state.productCount = action.payload;
        },
        setPerPage: (state: any | object[], action: any) => {
            state.perPage = action.payload;
        }
    }
});

export const { setProductCount, setPerPage } = productSlice.actions;
export default productSlice.reducer;