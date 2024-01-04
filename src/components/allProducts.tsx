import { useEffect, useState } from 'react';
import cartItems from '../cartItems';
import Product from './product';
import { getAllProducts } from '../slices/productSlice';
import {useDispatch,useSelector} from 'react-redux';
import { AppDispatch } from '../store';
const AllProducts=()=>{

    const dispatch=useDispatch<AppDispatch>();
    const {products}=useSelector((state:any)=>state.products)
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
    return(
        <>
        {
            products.map((product:any)=>{
                return <Product key={product.id} {...product}></Product>
            })
        }
       
        </>
    )
}

export default AllProducts;