import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {Shop} from "../src/Pages/Shop.jsx"
import {ShopCategory} from "../src/Pages/ShopCategory.jsx"
import {Product} from "../src/Pages/Product.jsx"
import {Cart} from "../src/Pages/Cart.jsx"
import {LoginSignUp} from "../src/Pages/LoginSignUp.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category = "men" />}/>
          <Route path='/women' element={<ShopCategory category = "women" />}/>
          <Route path='/kids' element={<ShopCategory category = "kids" />}/>
          <Route path='/product' element={<Product/>}>
            <Route path='productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
