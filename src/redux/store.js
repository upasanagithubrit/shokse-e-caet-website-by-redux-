import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/cartSlice";

export const store=configureStore({
    reducer:{
        // .....cart==jo name hai slice me ...store...cartslice.reducer----jo slice ka naam hai ...
        cart:CartSlice.reducer,
    }
});