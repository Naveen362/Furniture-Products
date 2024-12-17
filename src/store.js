import { configureStore } from "@reduxjs/toolkit";

import cartReduce from "./features/cart/cartSlice"

export const store=configureStore({
    reducer:{cartState:cartReduce,
        
    }
});
