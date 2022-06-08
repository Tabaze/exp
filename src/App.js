import React from 'react'
import './App.css';
import './App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home/Home'
import Login from './Components/pages/Login/Login'
import Product from './Components/pages/Products/Products'
import Contact from './Components/pages/Contact us/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/log-in' exact element={<Login />} />
          <Route path='/expired-projects' exact element={<Product />} />
          <Route path='/contact-us' exact element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
