import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { OrderConfirmed } from './components/OrderConfirmed';
import { NoMatchRoute } from './components/NoMatchRoute';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order-confirmed' element={<OrderConfirmed />}/>
        <Route path='/products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts/>} />
          <Route path='new' element={<NewProducts/>} />
        </Route>
        <Route path='*' element={<NoMatchRoute />}/>
      </Routes>
    </>
  )
}

export default App