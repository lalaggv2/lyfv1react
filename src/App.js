
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio';
import Personal from './Pages/Personal';
import Inventario from './Pages/Inventario';
import InicioCategory from './Pages/InicioCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Contactenos from './Pages/Contactenos';

//archivo base con las rutas que aparecen al escoger un producto de la pagina
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/personal' element={<Personal banner={men_banner} />}/>
        <Route path='/inventario' element={<Inventario banner={women_banner} />}/>
        <Route path='/catalogo' element={<InicioCategory banner={kid_banner} category="catalogo"/>}/>
        <Route path='/contactenos' element={<Contactenos />}/>
        <Route path='/product' element={<Product/>}>
          
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
