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
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order-confirmed' element={<OrderConfirmed />}/>
        <Route path='/products' element={<Products />}>
          <Route index element={<FeaturedProducts/>} />
          <Route path='featured' element={<FeaturedProducts/>} />
          <Route path='new' element={<NewProducts/>} />
        </Route>
        <Route path='/users' element={<Users />}>
          <Route path=':userId' element={<UserDetails/>} />
          <Route path='admin' element={<Admin/>} />
        </Route>
        <Route path='*' element={<NoMatchRoute />}/>
      </Routes>
    </>
  )
}

export default App