import React from 'react'
import './App.css';
import './App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home/Home'
import Login from './Components/pages/Login/Login'
import Product from './Components/pages/Products/Products'
import Contact from './Components/pages/Contact us/Contact'
import Posts from './Components/pages/Posts/Posts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
        <Routes>
          <Route path='/' exact element={<Home />}  />
          <Route path='/completed-projects' exact element={<Posts />}  />
          <Route path='/log-in' exact element={<Login />} />
          <Route path='/expired-projects' exact element={<Product />} />
          <Route path='/contact-us' exact element={<Contact />} />
          {/* <Route path='/completed-projects' exact element={<NewProject />}/> */}
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
