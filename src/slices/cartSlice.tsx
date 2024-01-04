import { createSlice } from '@reduxjs/toolkit';
export interface CartItem{
    id:number,
    title:string,
    amount:number,
    price:string,
    image:string
}

type CartState={
    cartItems:CartItem[],
    totalItems:number,
    total:number,
}
const initialState:CartState = {
    cartItems:[],
    totalItems: 0,
    total: 0,
};




const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[];
        },
        addToCart:(state,action)=>{
            let item=state.cartItems.find(item=>item.id===action.payload.id)
            if(item){
                item.amount+=1
            }
            else{
                state.cartItems.push(action.payload);
            }
        },
        removeItem:(state,action)=>{
            state.cartItems=state.cartItems.filter((item:any)=>item.id !==action.payload);
        },
        increaseUnit:(state,action)=>{
            const cartitem=state.cartItems.find((item)=>item.id===action.payload);
            if(cartitem?.amount){
                cartitem.amount+=1;
            }
        },
        decreaseUnit:(state,action)=>{
            const cartitem=state.cartItems.find((item)=>item.id===action.payload);
            if(cartitem?.amount){
                cartitem.amount-=1;
            }
        },
        calculateTotal:(state)=>{
            let units=0;
            let total=0;
            state.cartItems.forEach((item:any)=>{
                units+=item.amount;
                total+=item.amount*item.price;
            });
            state.totalItems=units;
            state.total=total;
        }
    },
})

export const {clearCart,addToCart,removeItem,increaseUnit,decreaseUnit,calculateTotal}=cartSlice.actions;

export default cartSlice.reducer;