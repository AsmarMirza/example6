
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Admin from './pages/Admin';
import Add from './pages/Add';
import Wishlist from './pages/Wishlist';
import MainProvider from './context/MainProvider';
import Detail from './pages/Detail';
import {  HelmetProvider } from 'react-helmet-async';

function App() {


  return (
    <>
     <HelmetProvider>
    <MainProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </HelmetProvider>
    </>
  )
}

export default App
