import './App.css';
import UserCart from './userCart';
import AllProducts from './components/allProducts';
import { Routes,Route,useNavigate ,Outlet} from 'react-router';
import Login from './components/login';
function App() {

  const navigate=useNavigate();
  return (
    <div>
      <nav className='nav'>
        <ul>
        <li><a onClick={()=>navigate('/')}>Home</a></li>
          <li><a onClick={()=>navigate('/products')}>All Products</a></li>
          <li><a onClick={()=>navigate('/cart')}>Cart</a></li>
        </ul>
      </nav>
      <div className='outlet' >
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/products' element={<AllProducts/>}></Route>
        <Route path='/cart' element={<UserCart/>}></Route>
      </Routes>
      <div >
      <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default App;
