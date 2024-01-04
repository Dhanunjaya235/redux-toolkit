import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import CartItem from './components/cartItem';
import { calculateTotal } from './slices/cartSlice';
import ClearCartModal from './modals/clearCartModal';
import { openModal } from './slices/clearCartSlice';
import {Button} from 'react-bootstrap';
import { useEffect } from 'react';
function UserCart() {

  const {cartItems,total}=useSelector((store:any)=>store.cart);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return (
    <div className="app">
        
        {cartItems.length>0?<><table>
              <thead>
                  <tr>
                      <th>S.no</th>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>No.of Units</th>
                      <th>Remove</th>
                  </tr>
              </thead>
              <tbody>
                  {cartItems.map((item: any) => {
                      return <CartItem key={item.id} {...item} />;
                  })}
                  <tr>
                      <td colSpan={4} style={{textAlign:"end"}}>Total</td>
                      <td>{total.toFixed(2)}</td>
                  </tr>
              </tbody>
          </table><div>
                  <Button onClick={() => dispatch(openModal())}>ClearCart</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant='success' disabled > CheckOut</Button>
              </div><div>
                  <ClearCartModal />
              </div></>:<><h1>Your Cart Is Empty</h1></>
}
    </div>
  );
}

export default UserCart;
