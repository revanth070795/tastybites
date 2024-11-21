import React from 'react';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuCard from './components/MenuCard';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Toaster position="top-right" />
        <Navbar />
        <Hero />
        <MenuCard />
        <Contact/>
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;