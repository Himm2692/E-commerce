
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './component/Productdetails';
import AddCart from './component/AddCart';
import Login from './component/Login'
import Signup from './component/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path = "/" element = {<Home/>}/>
      <Route path='/login' element= {<Login/>}/>
      <Route path='/signup' element ={<Signup/>}/>
      <Route path = "/product/:productId" element = {<ProductDetails/>}/>
      <Route path = "/addCart" element = {<AddCart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
