
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio';
import InicioCategory from './Pages/InicioCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/personal' element={<InicioCategory banner={men_banner} category='personales'/>}/>
        <Route path='/inventario' element={<InicioCategory banner={women_banner} category="inventarios"/>}/>
        <Route path='/catalogo' element={<InicioCategory banner={kid_banner} category="catalogo"/>}/>
        <Route path='/contactenos' element={<InicioCategory category="contacto"/>}/>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
