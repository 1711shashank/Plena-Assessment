import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        favourite: favouriteSlice
    }
});

export default store;
