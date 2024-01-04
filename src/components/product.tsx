import {FC} from 'react';
import { CartProps } from './cartItem';
import {Button} from 'react-bootstrap'
import styles from '../styles.module.css';
import {addToCart} from '../slices/cartSlice';
import {useDispatch} from 'react-redux';
import { successToast } from '../toasters';
const Product:FC<CartProps>=({id,title,price,image,amount})=>{

    const dispatch=useDispatch();
    return(
        <div className={styles.item}>
            <img className={styles.image} alt="mobile" src={image}></img>
            <h4>{title}</h4>
            <h4>Price : {price}</h4>
            <Button variant="warning" onClick={()=>{dispatch(addToCart({id,title,price,image,amount}));successToast("Item Added To Cart")}}>Add to cart</Button>
        </div>
    )
}

export default Product;