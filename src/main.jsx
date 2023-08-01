import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route, 
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Vans, { loader as vansLoader} from './pages/Vans'
import VansDetails, { loader as VansDetailsLoader} from './pages/VanDetails';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Income from './pages/Hosts/Income'
import Reviews from './pages/Hosts/Reviews'
import HostVan, { loader as hostVansLoader} from './pages/Hosts/HostVan'
import Dashboard from './pages/Hosts/Dashboard';
import HostVanDetail, { loader as hostVansDetailLoader} from './pages/Hosts/HostVanDetail';
import {Details, Pricing, Photos} from './pages/Hosts/HostVanInfo';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login, { loader as loginLoader, action as loginAction} from './pages/Login';
import { requireAuth } from './utils/autho'
import './scss/main.scss'
import "../server"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route 
        path='login' 
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route 
        path='vans' 
        loader={vansLoader} 
        element={<Vans />} 
        errorElement={<Error />}
      />
      <Route 
        path='vans/:id' 
        element={<VansDetails />}
        loader={VansDetailsLoader} 
      />
      <Route 
        path='host' 
        element={<HostLayout />}
        loader={async () => {
            await requireAuth()
            return null
          }
        }
      >
        <Route 
          index 
          element={<Dashboard />}
          loader={async () => {
            await requireAuth()
            return null
          }
        }
        />
        <Route 
          path='income' 
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route 
          path='reviews' 
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route 
          path='vans' 
          element={<HostVan />}
          loader={hostVansLoader}
        />
        <Route 
          path='vans/:id' 
          element={<HostVanDetail />}
          loader={hostVansDetailLoader}
        >
          <Route 
            index 
            element={<Details />} 
            loader={async () => await requireAuth()}
          />
          <Route 
            path='pricing' 
            element={<Pricing />} 
            loader={async () => await requireAuth()}
          />
          <Route 
            path='photos' 
            element={<Photos />} 
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <RouterProvider router={router}/>
)
