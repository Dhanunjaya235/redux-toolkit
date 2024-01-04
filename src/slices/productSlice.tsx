import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CartItem } from "./cartSlice";
import { successToast,errorToast } from "../toasters";

type ProductState={
    products:CartItem[],
    isLoading:boolean
}

const initialState:ProductState={
    products:[],
    isLoading:true
}

export const getAllProducts=createAsyncThunk(
    'products/getAllProducts',
    async(name,thunkApi)=>{
        try{
            const responce= await axios.get('http://localhost:3000/products');
            return responce.data;
        }
        catch(error){
            return thunkApi.rejectWithValue('Something Went Wrong')
        }
    }
)

const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addNewProduct:(state,aciton)=>{
            state.products.push(aciton.payload)
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            successToast("Products Fetched Sucessfully");
          })
          .addCase(getAllProducts.rejected, (state, action) => {
            console.log(action);
            let message:string=action.payload as string
            errorToast(message)
            state.isLoading = false;
          });
      },
})

export const {addNewProduct}=productsSlice.actions;
export default productsSlice;