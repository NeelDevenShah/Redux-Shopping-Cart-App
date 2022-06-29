import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth-slice";
import cartSlice from "./Cart-slice";
import uiSlice from "./ui-slice";

const store=configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer,
    }
})
export default store;