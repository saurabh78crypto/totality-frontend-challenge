import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart'; 
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import authService from './services/authService';
import PropertyList from './pages/PropertyList'; 

const App = () => {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={authService.isAuthenticated() ? <Checkout /> : <Navigate to="/login" />} />
        <Route path="/property/:id" element={authService.isAuthenticated() ? <PropertyList /> : <Navigate to="/login" />} />
        <Route path="/cart" element={authService.isAuthenticated() ? <Cart /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
