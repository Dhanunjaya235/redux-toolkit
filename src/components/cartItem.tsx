import {useDispatch} from 'react-redux';
import  { FC } from 'react';
import { removeItem ,increaseUnit,decreaseUnit} from '../slices/cartSlice';
import styles from '../styles.module.css';
import { successToast } from '../toasters';
export interface CartProps{
    id:number,
    title:string,
    price:string,
    amount:number,
    image:string
}

const CartItem:FC<CartProps>=({id,title,price,amount,image})=>{


    const dispatch=useDispatch();

        return(
                <tr key={id}>
                    <td>{id}</td>
                    <td><img src={image} alt="Mobile" style={{width:"20%",height:"20%"}}/></td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td><a className={styles.links} onClick={()=>dispatch(decreaseUnit(id))}>-</a>{amount}<a className={styles.links} onClick={()=>dispatch(increaseUnit(id))}>+</a></td>
                    <td><a className={styles.links} onClick={()=>{dispatch(removeItem(id));successToast("Item Removed Successfully")}}>Remove</a></td>
                </tr>
        )
}
export default CartItem;