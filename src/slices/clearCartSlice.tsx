import {createAction,createReducer} from "@reduxjs/toolkit";

const initialState ={
    isOpen:false
};

export const openModal=createAction('clearCart/openModal');
export const closeModal=createAction('clearCart/closeModal');


const clearCartReducer=createReducer(initialState,(builder)=>{
    builder
        .addCase(openModal,(state)=>{state.isOpen=true})
        .addCase(closeModal,(state)=>{state.isOpen=false})
})

export default clearCartReducer;

// const clearCartSlice=createSlice({
//     name:'clearCart',
//     initialState,
//     reducers:{
//         openModal:(state)=>{
//             state.isOpen=true;
//         },
//         closeModal:(state)=>{
//             state.isOpen=false;
//         }
//     }
// })

// export const {openModal,closeModal}=clearCartSlice.actions;

// export default clearCartSlice.reducer;