import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/footer/footer';
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <Header/>
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
