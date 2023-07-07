import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Vans from './pages/Vans'
import VansDetails from './pages/VanDetails';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Income from './pages/Hosts/Income'
import Reviews from './pages/Hosts/Reviews'
import HostVan from './pages/Hosts/HostVan'
import Dashboard from './pages/Hosts/Dashboard';
import HostVanDetail from './pages/Hosts/HostVanDetail';
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
        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path='income' element={<Income />}/>
          <Route path='reviews' element={<Reviews />}/>
          <Route path='vans' element={<HostVan />}/>
          <Route path='vans/:id' element={<HostVanDetail />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
