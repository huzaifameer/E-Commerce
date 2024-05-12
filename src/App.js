import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {Shop} from "../src/Pages/Shop.jsx"
import {ShopCategory} from "../src/Pages/ShopCategory.jsx"
import {Product} from "../src/Pages/Product.jsx"
import {Cart} from "../src/Pages/Cart.jsx"
import {LoginSignUp} from "../src/Pages/LoginSignUp.jsx"
import { Footer } from './components/Footer/Footer.jsx';
import men_banner from "./components/Assets/banner_mens.png"
import women_banner from "./components/Assets/banner_women.png"
import kids_banner from "./components/Assets/banner_kids.png"


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category = "men" />}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category = "women" />}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category = "kids" />}/>
          <Route path='/product' element={<Product/>}>
            <Route path='productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
