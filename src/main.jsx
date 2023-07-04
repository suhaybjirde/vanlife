import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Vans from './pages/Vans'
import VansDetails from './pages/VanDetails';
import Layout from './components/Layout';
import './scss/main.scss'
import "../server"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VansDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
