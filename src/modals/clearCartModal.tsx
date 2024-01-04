import { Modal,Button } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux';
import { closeModal } from "../slices/clearCartSlice";
import { clearCart } from "../slices/cartSlice";
import { successToast } from "../toasters";
const ClearCartModal=()=>{

    const dispatch=useDispatch();
    const {isOpen}=useSelector((store:any)=>store.clearCart);
    return(
        <Modal show={isOpen} style={{marginTop:"15%"}}>
                <Modal.Body>
                    Are You Sure To Clear Cart?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={()=>{dispatch(clearCart());dispatch(closeModal());successToast("Cart Cleared Successfully")}} >Clear</Button>
                    <Button variant="light" onClick={()=>dispatch(closeModal())}>Cancel</Button>

                </Modal.Footer>
        </Modal>
    )
}

export default ClearCartModal;