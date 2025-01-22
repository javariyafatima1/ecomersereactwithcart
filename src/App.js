import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Header from './component/Header';
import Singup from './component/Singup';
import Login from './component/Login';
import Card from './component/Card';
import Home from './component/Home';
import Product from './component/Product';
import About from './component/About';
import Footer from './component/Footer';
function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <div>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/singup" element={<Singup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/card" element={<Card />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/footer" element={<Footer />}/>
            
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
