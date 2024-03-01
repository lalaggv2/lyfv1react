
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio';
import InicioCategory from './Pages/InicioCategory';
import LoginSignup from './Pages/LoginSignup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/personal' element={<InicioCategory category='personal'/>}/>
        <Route path='/inventario' element={<InicioCategory category="inventario"/>}/>
        <Route path='/clientes' element={<InicioCategory category="clientes"/>}/>
        <Route path='/contactenos' element={<InicioCategory category="contactenos"/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
