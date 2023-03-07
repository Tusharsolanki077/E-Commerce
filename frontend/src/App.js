import './App.css';
import { BrowserRouter, Route,Routes} from "react-router-dom"
import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/footer/footer';
import Home from './components/Home/Home'
import ProductDetails from './components/product/productDetails'
import Products from './components/products/products' 
import Search from './components/search/search'


function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="" element={<Home/>}  />
        <Route path="/product/:id" element={<ProductDetails/>}  />
        <Route path="/products" element={<Products/>}  />
        <Route path="/products/:keyword" element={<Products/>}  />

        <Route path="/search" element={<Search />}  />
        
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
