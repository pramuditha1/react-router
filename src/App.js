import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { OrderConfirmed } from './components/OrderConfirmed';

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order-confirmed' element={<OrderConfirmed />}/>
      </Routes>
    </>
  )
}

export default App