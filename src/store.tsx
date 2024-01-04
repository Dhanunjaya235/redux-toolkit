import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './slices/cartSlice';
import clearCartReducer from './slices/clearCartSlice';
import productsSlice from './slices/productSlice';
const store =configureStore({
    reducer:{
        cart:cartReducer,
        clearCart:clearCartReducer,
        products:productsSlice.reducer
    }
})
export type AppDispatch = typeof store.dispatch;
export default store;