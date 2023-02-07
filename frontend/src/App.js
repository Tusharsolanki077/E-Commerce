import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/footer/footer';
import Home from './components/Home/Home'
import ProductDetails from './components/product/productDetails.js'

function App() {
  return (
    <Router>
      <Header/>

      <Route exact="/" component={Home} />
      <Route exact="/product/:id" component={ProductDetails} />
      
      
      <Footer/>
    </Router>
  );
}

export default App;
