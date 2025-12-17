import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage.jsx';
import Cart from './components/Cart.jsx';
import { GlobalProvider } from './context/GlobalContext.jsx';
import Products from './components/Products.jsx'
import Orders from './components/Orders.jsx';
import LoginForm from './components/LoginPage.jsx';
import Admin from './components/Admin.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/admin' element={<AdminRoute><Admin /></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  </GlobalProvider>
);
