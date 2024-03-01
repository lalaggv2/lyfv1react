
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio';
import InicioCategory from './Pages/InicioCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/personal' element={<InicioCategory category='personales'/>}/>
        <Route path='/inventario' element={<InicioCategory category="inventarios"/>}/>
        <Route path='/clientes' element={<InicioCategory category="cliente"/>}/>
        <Route path='/contactenos' element={<InicioCategory category="contacto"/>}/>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
