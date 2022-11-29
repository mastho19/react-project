import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer';
import Login from './components/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
